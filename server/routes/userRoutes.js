import express from 'express';
import { registerUser, loginUser, getMe, verifyEmail, resendOtp, requestPasswordReset, resetPassword, updateProfile } from '../controllers/userController.js';
import auth from '../middleware/auth.js';
import upload from "../middleware/multer.js";

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/verify-email', verifyEmail);
userRouter.post('/resend-otp', resendOtp);
userRouter.post('/login', loginUser);
userRouter.post('/request-password-reset', requestPasswordReset);
userRouter.post('/reset-password', resetPassword);
userRouter.get('/me', auth, getMe);
userRouter.put('/profile', auth, upload.single('avatar'), updateProfile);

export default userRouter;
