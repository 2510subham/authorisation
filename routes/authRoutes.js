import express from 'express';
import { forgotPassword, login, register, adminController } from '../controller/authController.js';
import { validateUser, isAdmin } from '../middlewares/authMiddlewares.js';
const router = express.Router();

//register
router.post("/register", register);

// login
router.post("/login", login);

// forgot password
router.post("/forgot-password", forgotPassword);


router.get('/admin', validateUser, isAdmin, adminController)


export default router;