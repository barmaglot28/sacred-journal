const api = require("./api");

const renderSignin = async ctx => {
    await ctx.render("Index", {module: "signin"});
};

module.exports = {
    ...api,
};
