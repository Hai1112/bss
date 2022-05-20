const Router = require("koa-router");

const router = new Router({
  prefix: "/devices",
});

let devices = [
  {
    name: "TV",
    macAddress: "00:18:44:113A:B7",
    ip: "127.0.0.2",
    createdDate: "2021/5/21",
    powerConsumption: 50,
  },
  {
    name: "Washer",
    macAddress: "00:18:44:113A:B3",
    ip: "127.0.0.1",
    createdDate: "2021/5/31",
    powerConsumption: 80,
  },
];

router.get("/", (ctx, next) => {
  ctx.body = devices;
  next();
});

router.post("/", async (ctx, next) => {
  const newDevice = {
    name: ctx.request.body.name,
    macAddress: ctx.request.body.macAddress,
    ip: ctx.request.body.ip,
    createdDate: ctx.request.body.createdDate,
    powerConsumption: ctx.request.body.powerConsumption,
  };
  devices.push(newDevice);
  ctx.response.status = 201;
  ctx.body = "New device added";
  next();
});

module.exports = router;
