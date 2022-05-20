const Router = require("koa-router");

const router = new Router({
  prefix: "/login",
});

router.post("/", (ctx, next) => {
  if (
    ctx.request.body.username == "john" &&
    ctx.request.body.password == "1234"
  ) {
    ctx.body = {
      status: "success",
      message: "Login Success",
    };
  } else {
    ctx.body = {
      status: "error",
      message: "Login failure",
    };
  }
  next();
});

module.exports = router;
