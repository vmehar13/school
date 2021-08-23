const express = require('express');
const router = express.Router();

const { getUserById } = require('../controllers/user');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
const { createGallery, upload, getAllGallery } = require('../controllers/gallery');

//Params
router.param('userId', getUserById)

//Actual Routes

//Create
router.post('/gallery/create/:userId', isAdmin, upload.single('photo'), createGallery);

//Read
router.get('/gallery', getAllGallery);

module.exports = router;