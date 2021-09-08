const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: "No user found in DB"
            })
        }
        req.profile = user;
        next();
    });
}

exports.getUser = (req, res) => {
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    req.profile.createdAt = undefined;
    req.profile.updatedAt = undefined;
    return res.json(req.profile);
}

exports.updateUser = (req, res) =>{
    User.findByIdAndUpdate(
        {_id: req.profile._id},
        {$set: req.body},
        {new: true, useFindAndModify: false},
        (err, user) => {
            if(err){
                res.status(400).json({
                    error: "You are not authorized to Update"
                });
            }
            // user.salt = undefined;
            // user.encry_password = undefined;
            // user.profile.createdAt = undefined;
            // user.profile.updatedAt = undefined;
            res.json(user.firstName,
                user.lastName,
                user.email);
        }
    )
}

exports.userPurchaseList = (req, res) => {
    Order.find({User: req.profile._id})
    .populate("user", "_id name")
    .exec((err, order) => {
        if(err){
            res.status(400).json({
                error: "No order is ther"
            })
        }
        res.json(order);
    })
}

exports.pushOrderInPurchaseList = (req, res, next) => {
    
    let purchases = [];
    req.body.order.products.forEach(product => {
        purchases.push({
            _id: product._id,
            name: product.name,
            description: product.description,
            category: product.category,
            quantity: product.quantity,
            amount: req.body.order.amount,
            transaction_id: req.body.order.transaction_id
        })
    });

    //Storing Products in DB

    User.findOneAndUpdate(
        {_id: req.profile._id},
        {$push: {purchases: purchases}},
        {new: true},
        (err, purchases) => {
            if(err){
                res.status(400).json({
                    error: "Not Stored in DB"
                })
            }
            next();
        }
    )

}