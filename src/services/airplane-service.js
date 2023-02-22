const { AirplaneRepository } = require("../repositories");

class AirplaneService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  async getAirplane(airplaneId) {
    try {
      const airplane = await this.airplaneRepository.getAirplane(airplaneId);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in the airplane service layer.");
      throw { error };
    }
  }
}

module.exports = AirplaneService;
