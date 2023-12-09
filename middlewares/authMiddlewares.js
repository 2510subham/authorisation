import jwt from "jsonwebtoken";
import auth from "../modals/auth.js";

export const validateUser = async (req, res, next) => {
    try {
        const token = req?.headers?.authorization
        console.log("Token", token);
        const decode = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.user = decode;
        console.log("User", req.user);
        next();
    } catch (error) {
        console.log("Error while verifying token", error);
    }
};

// admin access
export const isAdmin = async (req, res, next) => {
    try {
        const user = await auth.findById(req.user._id);
        if (user.role !== 'admin') {
            return res.status(401).send({
                success: false,
                message: "Unauthorized access",
            });
        } else {
            next();
        }
    } catch (error) {
        console.log("Error while verifying admin token", error);
        res.status(401).send({
            success: false,
            message: "Error in admin middleware",
            error,
        });
    }
};