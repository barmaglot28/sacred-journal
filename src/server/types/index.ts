import {Handler} from "express";

export interface IRoute {
    method: "post" | "get" | "patch" | "delete";
    path: string;
    middleware: Handler[];
    handler: Handler;
}