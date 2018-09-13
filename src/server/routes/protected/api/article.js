import {Logger} from "../../../util/logger/Logger";
import {ArticleController} from "../../../controllers/Article";

const logger = new Logger(__filename);
const controller = new ArticleController();

const save = async (req, res, next) => {
    logger.start(req.id, "save", {body: req.body});

    await controller.save(req.id);
};
