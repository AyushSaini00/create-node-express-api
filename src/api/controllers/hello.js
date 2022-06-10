const error_res = require("../../utils/error_res");
const success_res = require("../../utils/success_res");

const hello_get_all = (req, res, next) => {
  try {
    // write your route logic here
    return success_res(res, 200, "Hello World!");
  } catch (err) {
    const errCode = err?.status || 500;
    const errMsg = err?.message || "something went wrong";
    return error_res(res, errCode, errMsg);
  }
};

module.exports = {
  hello_get_all,
};
