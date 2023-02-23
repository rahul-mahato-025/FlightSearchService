const serverErrorCodes = Object.freeze({
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
});

const successCodes = Object.freeze({
  SUCCESS: 200,
  CREATED: 201,
});

const errorCodes = Object.freeze({
  INTERNAL_SERVER_ERROR: 200,
});

module.exports = {
  serverErrorCodes,
  successCodes,
  errorCodes,
};
