import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import "../auth/passport.handler";
import { IUser } from "../interfaces/user.interface";

export class UserController {

    public authenticateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        passport.authenticate('local', async (err, user: IUser, info) => {
            try {
                if (err) return next(err);
                if (!user) {
                    return res.status(401).json({ status: "error", code: "unauthorized" });
                } else {
                    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET!, { expiresIn: process.env.TOKEN_EXPIRES_IN });
                    res.status(200).send({ token: token });
                }
            }
            catch (e) {
                console.log('authenticateUser - error: ', e);
                return next(e)
            }
        })(req, res, next)
    }
}