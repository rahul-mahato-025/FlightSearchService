const { Op } = require("sequelize");
const { Flight } = require("../models");

class FlightRepository {
  #createFilter(data) {
    const filterObj = {};
    if (data.arrivalAirportId) {
      filterObj.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filterObj.departureAirportId = data.departureAirportId;
    }
    const price = [];
    if (data.minPrice) {
      price.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      price.push({ price: { [Op.lte]: data.maxPrice } });
    }

    Object.assign(filterObj, { [Op.and]: price });
    return filterObj;
  }

  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the flight repository layer.");
      console.log(error);
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      const flight = await Flight.findByPk(flightId);

      if (data.totalSeats) {
        flight.totalSeats = data.totalSeats;
      }

      if (data.numSeats) {
        flight.totalSeats -= data.numSeats;
      }

      if (data.price) {
        flight.price = data.price;
      }

      flight.save();
      return flight;
    } catch (error) {
      console.log("Something went wrong in the flight repository layer.");
      console.log(error);
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flight.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the flight repository layer.");
      throw { error };
    }
  }

  async getAllFlights(filters) {
    try {
      const fliterObj = this.#createFilter(filters);
      const flights = await Flight.findAll({
        where: fliterObj,
      });
      return flights;
    } catch (error) {
      console.log("Something went wrong in the flight repository layer.");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
