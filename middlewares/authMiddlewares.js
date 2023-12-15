import jwt from "jsonwebtoken";
import auth from "../modals/auth.js";

export const validateUser = async (req, res, next) => {
    try {
        const token = req?.headers?.authorization
        const decode = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).send({
            success: false,
            message: "Error in verifying token",
        });
    }
};

// admin access
export const isAdmin = async (req, res, next) => {
    try {
        const user = await auth.findById(req.user._id);//check for the role with the id of the user which is stored in the token
        if (user.role !== 'admin') {
            return res.status(401).send({
                success: false,
                message: "Unauthorized access",
            });
        } else {
            next();
        }
    } catch (error) {
        res.status(401).send({
            success: false,
            message: "Error in admin middleware",
            error,
        });
    }
};
