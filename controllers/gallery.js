const  Gallery = require('../models/gallery');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');

exports.createGallery = (req, res) => {
    const gallery = new Gallery({
        _id: new mongoose.Types.ObjectId(),
        photo: req.file.path,
        category: req.body.category
    })

    gallery.save((err, gallery) => {
        if(err){
            return res.status(400).json({
                error: "Gallery UNABLE to save in DB"
            })
        }
        res.json(gallery);
    })
}

exports.getAllGallery = (req, res) => {
    Gallery.find().exec((err, gallery) => {
        if(err){
            return res.status(400).json({
                error: "gallery NOT FOUND"
            })
        };
        res.json(gallery);
    })
}

//MUlter

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
