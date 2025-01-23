const express  =  require('express');
const router = express.Router();
const {body} = require('express-validator');
const userContoller = require('../controllers/user.controller');

router.post('/Register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be atleast minmum 3 charaters long'),
    body('password').isLength({min: 6}).withMessage('Password must be 6 character long')
],
    userContoller.registerUser
)

module.exports =  router;