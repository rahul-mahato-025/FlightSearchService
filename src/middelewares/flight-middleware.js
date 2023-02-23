const { serverErrorCodes } = require("../utils/error-codes");

const validateCreateFlight = async (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.departureTime ||
    !req.body.arrivalTime ||
    !req.body.price
  ) {
    res.status(serverErrorCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Please provide all fields",
      error: "Invalid request body",
    });
  }

  next();
};

module.exports = {
  validateCreateFlight,
};
