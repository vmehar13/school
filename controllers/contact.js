const Contact = require('../models/contact');

exports.createContact = (req, res) => {
    const contact = new Contact(req.body);
    contact.save((err, contact) => {
        if(err){
            return res.status(400).json({
                error: "Failed to Save contact request"
            })
        }
        res.json({
            fullName: contact.fullName,
            email: contact.email,
            phone: contact.phone,
            message: contact.message
        })
    })
}

exports.getContactAll = (req, res) => {
    Contact.find().exec((err, contactAll) => {
        if(err){
            return res.status(400).json({
                error: "Unble to find contact request"
            })
        }
        res.json(contactAll);
    })
}