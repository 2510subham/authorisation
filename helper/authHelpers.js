import bcrypt from "bcrypt";

export async function hashPassword(password) {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        return res.status(401).send({message:"Error in hashing password"});
    }
};

export async function comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
};
