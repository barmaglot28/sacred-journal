import {NextFunction, Request, Response} from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    next();
}

export function notFoundHandler(req: Request, res: Response, next: NextFunction) {
    next();
}