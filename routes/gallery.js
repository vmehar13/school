const express = require('express');
const router = express.Router();

const { getUserById } = require('../controllers/user');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
const { createGallery, upload, getAllGallery, getGalleryById, deleteGallery } = require('../controllers/gallery');

//Params
router.param('userId', getUserById)
router.param('galleryId', getGalleryById)

//Actual Routes

//Create
router.post('/gallery/create/:userId', isAdmin, upload.single('photo'), createGallery);

//Read
router.get('/gallery', getAllGallery);

//Delete
router.delete('/gallery/:galleryId/:userId', isSignedIn, isAuthenticated, isAdmin, deleteGallery);

module.exports = router;