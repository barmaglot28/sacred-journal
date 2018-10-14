import {IRoute} from "../../types";
import {initApiRoutes} from "./api";

export function initPublicRoutes(): IRoute[] {
    return [
        ...initApiRoutes(),
    ]
}