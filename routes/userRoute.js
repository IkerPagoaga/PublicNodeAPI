const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
const { getAllUsers, postUsers, getUsersById, updateUsersById, deleteUsersById } = require('../controllers/userController');

// Get all users
router.get('/', getAllUsers);

// Get user by MongoDB ObjectId
router.get('/:id', getUsersById);

// Create new user
router.post('/', postUsers);

// Update user by MongoDB ObjectId
router.put('/:id', updateUsersById);

// Delete user by MongoDB ObjectId
router.delete('/:id', deleteUsersById);

module.exports = router;
