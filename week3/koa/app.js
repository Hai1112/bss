const Koa = require("koa");
const koaBody = require("koa-body");
const cors = require("@koa/cors");
const app = new Koa();

app.use(koaBody());
app.use(cors());

let devices = require("./routes/devices");
let logs = require("./routes/logs");
let users = require("./routes/login");
app.use(devices.routes());
app.use(logs.routes());
app.use(users.routes());

app.listen(4000);
