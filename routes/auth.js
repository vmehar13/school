var express = require('express');
var router = express.Router();
const { signout, signup, signin, isSignedIn } = require('../controllers/auth');

const { body, validationResult } = require('express-validator');


router.post("/signup",[
    body('firstName', "minimum lenth atlest 3 characters").isLength({min: 3}),
    body('email', "email is requried").isEmail(),
    body('password', "password should be minimum length of 3").isLength({min: 3})
], signup)


router.post("/signin",[
    body('email', "email is requried").isEmail(),
    body('password', "password should be minimum length of 3").isLength({min: 3})
], signin)

router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res) => {
    res.send("A protected Route");
})

module.exports = router;