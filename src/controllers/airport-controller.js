const { AirportService } = require("../services");

const airportService = new AirportService();

const get = async (req, res) => {
  try {
    const airport = await airportService.get(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Airport fetched successfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Airport could not be fetched",
      error: error,
    });
  }
};

module.exports = {
  get,
};
