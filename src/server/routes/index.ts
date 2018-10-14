import {Express} from "express";
import {IRoute} from "../types";
import {initPublicRoutes} from "./public";
import {initProtectedRoutes} from "./protected";

export function initRoutes(app: Express): void {
    const publicRoutes: IRoute[] = initPublicRoutes();
    const protectedRoutes: IRoute[] = initProtectedRoutes();

    const authMiddleware = require("../middleware/auth");
    const errorMiddleware = require("../middleware/error");

    for (const route of publicRoutes) {
        app[route.method](route.path, [...route.middleware], route.handler);
    }

    for (const route of protectedRoutes) {
        app[route.method](route.path, [authMiddleware.checkToken, ...route.middleware], route.handler);
    }

    app.use(errorMiddleware.notFoundHandler);
    app.use(errorMiddleware.errorHandler);
}
