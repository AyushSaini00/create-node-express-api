const success_res = (response, status_code = 200, message = "", data = {}) => {
  return response.status(status_code).json({
    status: "success",
    message,
    data,
  });
};

module.exports = success_res;
