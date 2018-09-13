import {Logger} from "../util/logger/Logger";

const logger = new Logger(__filename);

export class ArticleController {
    save(reqId, title, text, author) {
        logger.start(reqId, "save", {title, text, author});

        logger.finish(reqId, "save");
    }
}