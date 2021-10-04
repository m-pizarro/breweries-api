import { NextFunction, Request, Response } from "express";
import passport from "passport";
import { IUser } from "../interfaces/user.interface";

export class AuthController {

    public authenticateJWT(req: Request, res: Response, next: NextFunction) {
        passport.authenticate("jwt", function (err, user: IUser, info) {
            if (err) {
                console.log(err);
                return res.status(401).json({ status: "error", code: "unauthorized" });
            }
            if (!user) {
                return res.status(401).json({ status: "error", code: "unauthorized" });
            } else {
                return next();
            }
        })(req, res, next);
    }
}