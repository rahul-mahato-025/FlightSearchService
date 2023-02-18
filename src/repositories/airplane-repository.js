const { Airplane } = require("../models");

class AirplaneRepository {
  async getAirport(airplaneId) {
    try {
      const airplane = await Airplane.findByPk(airplaneId);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in the airplane repository layer.");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
