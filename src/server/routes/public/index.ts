import {Handler, Request, Response} from "express";

import {IRoute} from "../../types";
import {initApiRoutes} from "./api";

export function initPublicRoutes(): IRoute[] {
    const renderMain: Handler = (req: Request, res: Response) => {
        res.render('Index', {js: 'admin.js'});
    };

    const renderSignin: Handler = (req: Request, res: Response) => {
        res.render('Index', {js: 'signin.js'});
    };

    return [
        ...initApiRoutes(),
        {
            path: "/signin",
            method: "get",
            middleware: [],
            handler: renderSignin,
        },
        {
            path: "/",
            method: "get",
            middleware: [],
            handler: renderMain,
        },
    ]
}