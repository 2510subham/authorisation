import express from 'express';
import { forgotPassword, login, register } from '../controller/authController.js';
import { requireSignIn, isAdmin } from '../middlewares/authMiddlewares.js';
const router = express.Router();

//register
router.post("/register", register);

// login
router.post("/login", login);

// forgot password
router.post("/forgot-password", forgotPassword);

router.get('/profile', requireSignIn, (req, res) => {
    res.status(200).json({ user: "profile" })
})

router.get('/admin', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send("admin access")
})


export default router;