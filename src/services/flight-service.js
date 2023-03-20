const { FlightRepository, AirplaneRepository } = require("../repositories");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time should be more than departure time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in the flight service layer.");
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      const updatedFlight = await this.flightRepository.updateFlight(
        flightId,
        data
      );
      return updatedFlight;
    } catch (error) {
      console.log("Something went wrong in the flight service layer.");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the flight repository layer.");
      throw { error };
    }
  }

  async getAllFlights(filters) {
    try {
      const flights = await this.flightRepository.getAllFlights(filters);
      return flights;
    } catch (error) {
      console.log("Something went wrong in the flight repository layer.");
      throw { error };
    }
  }
}

module.exports = FlightService;
