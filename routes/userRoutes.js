const express = require('express');
const { registerUser, loginUser, getProfile, updateProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/retrieveprofile', authMiddleware, getProfile);
router.put('/updateprofile', authMiddleware, updateProfile);

module.exports = router;
