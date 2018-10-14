import {IRoute} from "../../../types";
import {initArticleRoutes} from "./article";

export function initProtectedApiRoutes(): IRoute[] {
    return [
        ...initArticleRoutes(),
    ]
}