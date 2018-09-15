module.exports = router => {
    const publicRoutes = require("./public");
    const protectedRoutes = require("./protected");

    const authMiddleware = require("../middleware/auth");
    const errorMiddleware = require("../middleware/error");

    for (const route of publicRoutes) {
        router[route.method](route.path, [...route.middleware], route.handler);
    }

    for (const route of protectedRoutes) {
        router[route.method](route.path, [authMiddleware.checkToken, ...route.middleware], route.handler);
    }

    router.use(errorMiddleware.notFoundHandler);
    router.use(errorMiddleware.errorHandler);
};
