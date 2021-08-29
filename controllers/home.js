const  {Home, Slider} = require('../models/home');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');

exports.createBanner = (req, res) => {
    console.log(req.files)
    const home = new Home({
        _id: new mongoose.Types.ObjectId(),
        banner1: req.files.banner1[0].path,
        banner2: req.files.banner2[0].path,
        banner3: req.files.banner3[0].path
    })

    home.save((err, home) => {
        if(err){
            return res.status(400).json({
                error: "baner UNABLE to save in DB"
            })
        }
        res.json(home);
    })
}


exports.getAllBanner = (req, res) => {
    Home.find()
            .exec((err, home) => {
                if(err){
                    return res.status(400).json({
                        error: "Banners NOT FOUND"
                    })
                };
                res.json(home);
        
            })
            
        }

//==================Update-Route===================

exports.updateBanner = (req, res) => {
    if(req.files.banner1[0] && req.files.banner2[0] && req.files.banner3[0]) {
        var updates = {
            banner1: req.files.banner1[0].path,
            banner2: req.files.banner2[0].path,
            banner3: req.files.banner3[0].path
        }
    }

    // else if(req.files.banner1[0] && req.files.banner2[0]) {
    //     var updates = {
    //         banner1: req.files.banner1[0].path,
    //         banner2: req.files.banner2[0].path
    //     }
    // }
    
    Home.findOneAndUpdate(req.param.bannerId, {
        $set: updates
    })
    .exec((err, updateBanner) => {
        if(err){
            return res.status(400).json({
                error: "Unable to UPDATE DATA in DB"
            })
        }
        // res.json(updateBanner)
        res.redirect('/admin/slider.html')
    })
    
        
}

//======================Slider========================

exports.createSlider = (req, res) => {

    const slider = new Slider({
        _id: new mongoose.Types.ObjectId(),
        slider1: req.files.slider1[0].path,
        slider2: req.files.slider2[0].path,
        slider3: req.files.slider3[0].path,
        slider4: req.files.slider4[0].path,
        slider5: req.files.slider5[0].path,
        slider6: req.files.slider6[0].path,
        slider7: req.files.slider7[0].path,
        slider8: req.files.slider8[0].path,
        slider9: req.files.slider9[0].path,
        slider10: req.files.slider10[0].path
    })

    slider.save((err, slider) => {
        if(err){
            return res.status(400).json({
                error: "Slider UNABLE to save in DB"
            })
        }
        res.json(slider);
    })
}

//==================Update-Route-SLider===================

exports.updateSlider = (req, res) => {
        var updates1 = {
            slider1: req.files.slider1[0].path,
            slider2: req.files.slider2[0].path,
            slider3: req.files.slider3[0].path,
            slider4: req.files.slider4[0].path,
            slider5: req.files.slider5[0].path,
            slider6: req.files.slider6[0].path,
            // slider7: req.files.slider7[0].path,
            // slider8: req.files.slider8[0].path,
            // slider9: req.files.slider9[0].path,
            // slider10: req.files.slider10[0].path
        }
        let len = req.files.key
        console.log(len)
    
    Slider.findOneAndUpdate(req.param.sliderId, {
        $set: updates1
    })
    .exec((err, updateSlider) => {
        if(err){
            return res.status(400).json({
                error: "Unable to UPDATE DATA in DB"
            })
        }
        res.json(updateSlider)
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


//Middle wares
exports.getBannerById = (req, res, next, id) => {
    Home.findById(id)
            .exec((err, banner) => {
                if(err){
                    return res.status(400).json({
                        error: "Unable Find Banner"
                    })
                }
                req.banner = banner;
                next();
            })
}

exports.getBanner = (req, res) => {
    return res.json(req.banner);
}

exports.getSliderById = (req, res, next, id) => {
    Slider.findById(id)
            .exec((err, slider) => {
                if(err){
                    return res.status(400).json({
                        error: "Unable Find Slider"
                    })
                }
                req.slider = slider;
                next();
            })
}

exports.getSlider = (req, res) => {
    return res.json(req.slider);
}