const { FlightService } = require("../services");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Flight created successfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: true,
      message: "Unable to create the flight",
      error: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params.id);
    return res.status(200).json({
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

module.exports = { create, get, getAll };
