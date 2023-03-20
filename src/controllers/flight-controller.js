const { FlightService } = require("../services");
const { successCodes } = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      price: req.body.price,
    });
    return res.status(successCodes.CREATED).json({
      data: flight,
      success: true,
      message: "Flight created successfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create the flight",
      error: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const flight = await flightService.updateFlight(req.params.id, req.body);
    return res.status(successCodes.SUCCESS).json({
      data: flight,
      success: true,
      message: "Flight updated successfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to update the flight",
      error: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params.id);
    return res.status(successCodes.SUCCESS).json({
      data: flight,
      success: true,
      message: "Flight fetched successfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: true,
      message: "Unable to get the flight",
      error: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlights(req.query);
    return res.status(200).json({
      data: flights,
      success: true,
      message: "Flights fetched successfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: true,
      message: "Unable to fetch the flights",
      error: error,
    });
  }
};

module.exports = { create, get, getAll, update };
