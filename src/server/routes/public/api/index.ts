import {IRoute} from "../../../types";
import {initSigninRoutes} from "./signin";

export function initApiRoutes(): IRoute[] {
    return [
        ...initSigninRoutes(),
    ]
}