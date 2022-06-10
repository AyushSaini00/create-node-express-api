const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const helloRoute = require("./api/routes/hello");
const error_res = require("./utils/error_res");

const app = express();

app.use(morgan("tiny"));
app.disable("x-powered-by");
app.use(helmet());
app.use(require("body-parser").urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(cors());

app.use("/hello", helloRoute);

app.use((req, res, next) => {
  const error = new Error(`Route ${req.url} not found`);
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const errCode = error.status || 500;
  const errMsg = error.message || "Internal Server Error";

  return error_res(res, errCode, errMsg);
});

module.exports = app;
