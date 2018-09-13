module.exports = app => {
    const publicRoutes = require("./public");
    const protectedRoutes = require("./protected");

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
};
