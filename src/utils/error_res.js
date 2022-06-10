const error_res = (response, status_code = 400, message = "", data = {}) => {
  return response.status(status_code).json({
    status: "error",
    message,
    data,
  });
};

module.exports = error_res;
