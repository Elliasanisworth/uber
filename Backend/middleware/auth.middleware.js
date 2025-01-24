const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');    
const captainModel = require('../models/captain.model');
const BlacklistTokenModel = require('../models/blacklist.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }

    const isblacklisted = await BlacklistTokenModel.findOne({token});
    
    if(isblacklisted){
        return res.status(401).json({message: 'Unauthorized'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

            req.user = user;

            return next(); 
    }catch (err){
        return res.status(401).json({message: 'Unauthorized'});
    }
}

module.exports.authCaptain = async (req, res, next) => {
    try {
        // Extract token from cookies or Authorization header
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'unauthorized' });
        }

        // Check if the token is blacklisted
        const blacklistedToken = await BlacklistTokenModel.findOne({ token });

        if (blacklistedToken) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the captain in the database
        const captain = await captainModel.findById(decoded._id);
        if (!captain) {
            return res.status(404).json({ message: 'Invalid' });
        }
        req.captain = captain;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};
