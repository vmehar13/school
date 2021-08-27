const Register = require('../models/register');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');

exports.getRegisterById = (req, res, next, id) => {
    Register.findById(id)
                .exec((err, register) => {
                    if(err){
                        return res.status(100).json({
                            error: "Unable to find Registration form in DB"
                        })
                    }
                    req.register = register
                })  
            next()
}

exports.createRegister = (req, res) => {
 
    const register = new Register({
        _id: new mongoose.Types.ObjectId(),
        profile: req.files.profilePic[0].path,
        field1: req.body.field1,
        tc: req.body.tc,
        studentName: req.body.studentName,
        dob: req.body.dob,
        weather: req.body.weather,
        applicatIsMy: req.body.applicatIsMy,
        fatherName: req.body.fatherName,
        fatherQualification: req.body.fatherQualification,
        motherName: req.body.motherName,
        motherQualification: req.body.motherQualification,
        guardianName: req.body.guardianName,
        guardianQualification: req.body.guardianQualification,
        transportation: req.body.transportation,
        occupationOfParets: req.body.occupationOfParets,
        motherTounge: req.body.motherTounge,
        religion: req.body.religion,
        town: req.body.town,
        post: req.body.post,
        district: req.body.district,
        state: req.body.state,
        localAddress: req.body.localAddress,
        phone: req.body.phone,
        gender: req.body.gender,
        nationality: req.body.nationality,
        field17: req.body.field17,
        field17Name: req.body.field17Name,
        field17Class: req.body.field17Class,
        field17Rollno: req.body.field17Rollno,
        aadhar: req.body.aadhar,
        aadharimg: req.files.aadharImg[0].path,



/*

        email: req.body.email,
        phone: req.body.phone,
        category: req.body.category,
        description: req.body.description,
        amountRequired: req.body.amountRequired,
        amountGainer: req.body.amountGainer,
        photo: req.files.photo[0].path,
        document: req.files.document[0].path */
    })

    register.save((err, register) => {
        if(err){
            return res.status(400).json({
                error: "REGISTER UNABLE to save in DB"
            })
        }
        // res.json(register);
        res.write(`
            <h1>Your Request Sumbitted Successfullty</h1>
            <a href="/index.html">sdsad</a>
        `)
        res.send();
    })
}

//for getting all registrations

exports.getRegisterAll = (req, res) => {
    Register.find().exec((err, registerAll) => {
        if(err){
            return res.status(400).json({
                error: "Unble to find register request"
            })
        }
        res.json(registerAll);
    })
}

//for updating data
exports.updateRegister = (req, res) => {
    // if(req.files){
    //     var updates1 = {
    //         field1: req.body.field1,
    //         tc: req.body.tc,
    //         studentName: req.body.studentName,
    //         dob: req.body.dob,
    //         weather: req.body.weather,
    //         applicatIsMy: req.body.applicatIsMy,
    //         fatherName: req.body.fatherName,
    //         fatherQualification: req.body.fatherQualification,
    //         motherName: req.body.motherName,
    //         motherQualification: req.body.motherQualification,
    //         guardianName: req.body.guardianName,
    //         guardianQualification: req.body.guardianQualification,
    //         transportation: req.body.transportation,
    //         occupationOfParets: req.body.occupationOfParets,
    //         motherTounge: req.body.motherTounge,
    //         religion: req.body.religion,
    //         town: req.body.town,
    //         post: req.body.post,
    //         district: req.body.district,
    //         state: req.body.state,
    //         localAddress: req.body.localAddress,
    //         phone: req.body.phone,
    //         gender: req.body.gender,
    //         nationality: req.body.nationality,
    //         field17: req.body.field17,
    //         field17Name: req.body.field17Name,
    //         field17Class: req.body.field17Class,
    //         field17Rollno: req.body.field17Rollno,
    //         aadhar: req.body.aadhar,
    //         aadharimg: req.files.aadharImg[0].path,
    //         profile: req.files.profilePic[0].path,
    //     }
    // }
        var updates1 = {
            field1: req.body.field1,
            tc: req.body.tc,
            studentName: req.body.studentName,
            dob: req.body.dob,
            weather: req.body.weather,
            applicatIsMy: req.body.applicatIsMy,
            fatherName: req.body.fatherName,
            fatherQualification: req.body.fatherQualification,
            motherName: req.body.motherName,
            motherQualification: req.body.motherQualification,
            guardianName: req.body.guardianName,
            guardianQualification: req.body.guardianQualification,
            transportation: req.body.transportation,
            occupationOfParets: req.body.occupationOfParets,
            motherTounge: req.body.motherTounge,
            religion: req.body.religion,
            town: req.body.town,
            post: req.body.post,
            district: req.body.district,
            state: req.body.state,
            localAddress: req.body.localAddress,
            phone: req.body.phone,
            gender: req.body.gender,
            nationality: req.body.nationality,
            field17: req.body.field17,
            field17Name: req.body.field17Name,
            field17Class: req.body.field17Class,
            field17Rollno: req.body.field17Rollno,
            aadhar: req.body.aadhar,
            // aadharimg: req.files.aadharImg[0].path,
            // profile: req.files.profilePic[0].path,
        }

    

Register.findOneAndUpdate(req.param.registerId, {
    $set: updates1
})
.exec((err, updateRegister) => {
    if(err){
        return res.status(400).json({
            error: "Unable to UPDATE DATA in DB"
        })
    }
    res.json(updateRegister)
})

    
}

//--------DELETE ROUTE----------------------------------

exports.deleteRegister = (req, res) => {
    const register = req.register;
    register.remove((err, deleteRegister) => {
        if(err){
            return res.status(400).json({
                error: "Register Form not DELETED"
            })
        }
        res.json({
            message: `Register ${deleteRegister} DELETED SUCCESFULLY`
        })
    })
}


//multer

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/');
    }, 

    filename: (req, file, cb) => {
        cb(null, Date.now()+'-'+file.originalname);
    }
});

exports.upload = multer({
    storage: storage
})


