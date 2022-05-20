const Router = require("koa-router");

const router = new Router({
  prefix: "/logs",
});

let devicesLog = [
  {
    id: "101",
    name: "TV",
    action: "Turn On",
    power: "50",
  },
  {
    id: "102",
    name: "Radio",
    action: "Turn On",
    power: "20",
  },
  {
    id: "103",
    name: "Washer",
    action: "Turn Off",
    power: "80",
  },
  {
    id: "104",
    name: "Lamp",
    action: "Turn On",
    power: "10",
  },
  {
    id: "105",
    name: "Washing machine",
    action: "Sleep",
    power: "60",
  },
  {
    id: "106",
    name: "PC",
    action: "Sleep",
    power: "40",
  },
  {
    id: "107",
    name: "Refrigerator",
    action: "Turn On",
    power: "100",
  },
  {
    id: "108",
    name: "Smart TV",
    action: "Sleep",
    power: "70",
  },
  {
    id: "109",
    name: "Laptop",
    action: "Turn Off",
    power: "10",
  },
  {
    id: "110",
    name: "Electric Stove",
    action: "Turn On",
    power: "40",
  },
];

router.get("/", (ctx, next) => {
  ctx.body = devicesLog;
  next();
});

module.exports = router;
