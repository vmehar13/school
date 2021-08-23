const express = require('express');
const router = express.Router();

const { createRegister, upload, getRegisterAll,  getRegisterById, updateRegister, deleteRegister } = require('../controllers/register');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
const { getUserById } = require('../controllers/user');


router.param("userId", getUserById);
router.param("registerId", getRegisterById);

//=====================Actual-Routes============================

var cpUpload = upload.fields([{ name: 'profilePic', maxCount: 1 }, { name: 'aadharImg', maxCount: 2 }])

//create-route
router.post('/register/create', cpUpload, createRegister);

//get route
router.get('/admin/register/:userId',isSignedIn, isAuthenticated, isAdmin, getRegisterAll);

//update Route
router.post('/admin/register/:registerId/:userId',isAdmin,cpUpload,  updateRegister);

//delete Route
router.delete('/admin/register/:registerId/:userId', isSignedIn, isAuthenticated, isAdmin, deleteRegister);


module.exports = router;