const express = require('express');
// const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
const router = express.Router();

const { createContact, getContactAll} = require('../controllers/contact');
const { getUserById } = require('../controllers/user');

router.param("userId", getUserById);

router.post('/contact/create', createContact)

router.get('/admin/contact/:userId' ,  getContactAll)

module.exports = router;