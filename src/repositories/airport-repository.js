const { Airport } = require("../models");

class AirportRepository {
  async getAirport(airportId) {
    try {
      const airport = await Airport.findByPk(airportId);
      return airport;
    } catch (error) {
      console.log("Something went wrong in the airport repository layer.");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
