const express = require('express');
const router = express.Router();


const { createBanner, upload, getAllBanner, getBanner, getBannerById, updateBanner, createSlider, getSlider, getSliderById, updateSlider } = require('../controllers/home');
const { getUserById } = require('../controllers/user');

router.param('bannerId', getBannerById);
router.param('userId', getUserById);
router.param('sliderId', getSliderById);

//=====================Actual-Routes============================

var cpUpload = upload.fields([{ name: 'banner1', maxCount: 1 }, { name: 'banner2', maxCount: 1 }, { name: 'banner3', maxCount: 1 }])

//create-route
// router.post('/admin/banner/create/:userId', cpUpload , createBanner);

//get
router.get("/banner" , getAllBanner);
router.get('/banner/:bannerId', getBanner);

//update-route
router.post('/banner/:bannerId/:userId', cpUpload, updateBanner);

//Slider2

var cpUpload2 = upload.fields([{ name: 'slider1', maxCount: 1 }, { name: 'slider2', maxCount: 1 }, 
{ name: 'slider3', maxCount: 1 }, { name: 'slider4', maxCount: 1 }, { name: 'slider5', maxCount: 1 }, 
{ name: 'slider6', maxCount: 1 }, { name: 'slider7', maxCount: 1 }, { name: 'slider8', maxCount: 1 }, 
{ name: 'slider9', maxCount: 1 }, { name: 'slider10', maxCount: 1}],)

//Create-route
//router.post('/slider/create', cpUpload2, createSlider);

//read route
router.get('/slider/:sliderId', getSlider);

//update-route
router.post('/slider/:sliderId', cpUpload2, updateSlider);

module.exports = router;