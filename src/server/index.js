const path = require("path");
const koa = require("koa");
const koaRouter = require("koa-router");
const koaBodyParser = require("koa-bodyparser");
const koaStatic = require("koa-static");
const koaViews = require("koa-views");

const app = new koa();
app.use(koaBodyParser());
app.use(koaStatic(path.resolve(__dirname, "../../build")));
app.use(koaViews(path.resolve(__dirname, "./views"), {extension: "pug"}));

const router = new koaRouter();

router.get("*", async ctx => {
    await ctx.render("Index", {js: "admin.js"});
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => console.log("Server is running on port 3000"));