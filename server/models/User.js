import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true, lowercase: true, trim: true},
    passwordHash: {type: String, required: true},
    isVerified: {type: Boolean, default: false},
    otpHash: {type: String},
    otpExpiresAt: {type: Date},
    resetOtpHash: {type: String},
    resetOtpExpiresAt: {type: Date},
    avatar: {type: String},
    bio: {type: String, default: ''},
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
