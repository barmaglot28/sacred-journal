import {NextFunction, Request, Response} from "express";

export function checkToken(req: Request, res: Response, next: NextFunction) {
    next();
}