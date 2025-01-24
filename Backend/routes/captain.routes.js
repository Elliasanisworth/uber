const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');

router.post('/register', [ 
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('firstname must be at least 3 characters long'),
    body('fullname.lastname').isLength({min: 3}).withMessage('lastname must be at least 3 characters long'),
    body('password').isLength({min: 6}).withMessage('password must be at least 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
],
 captainController.registerCaptain
);

module.exports = router;