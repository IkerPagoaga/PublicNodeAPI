const mongoose = require('mongoose');

// MongoDB schema
const userSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: false,
            unique: false
        },
        username: {
            type: String,
            required: [true, "Please enter your name"]
        },
        phoneNumber: {
            type: Number,
            required: true,
            default: 0
        },
        userAge: {
            type: Number,
            required: true,
        },
        userImage: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

// Export user schema
module.exports = User;
