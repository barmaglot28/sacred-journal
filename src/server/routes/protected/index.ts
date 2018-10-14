import {IRoute} from "../../types";
import {initProtectedApiRoutes} from "./api";

export function initProtectedRoutes(): IRoute[] {
    return [
        ...initProtectedApiRoutes(),
    ]
}