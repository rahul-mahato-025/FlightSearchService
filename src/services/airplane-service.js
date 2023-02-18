const { AirplaneRepository } = require("../repositories");

class AirplaneService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  async getAirport(airplaneId) {
    try {
      const airplane = await this.airplaneRepository.getAirport(airplaneId);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in the airplane service layer.");
      throw { error };
    }
  }
}

module.exports = AirplaneService;
