const { AirportRepository } = require("../repositories");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async getAirport(airportId) {
    try {
      const airport = await this.airportRepository.getAirport(airportId * 1);
      return airport;
    } catch (error) {
      console.log("Something went wrong in the airport service layer.");
      throw { error };
    }
  }
}

module.exports = AirportService;
