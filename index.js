const http = require("http");
const app = require("./src/app");

require("dotenv").config();

const port = process.env.PORT || 5500;

const server = http.createServer(app);

server.listen(port);
