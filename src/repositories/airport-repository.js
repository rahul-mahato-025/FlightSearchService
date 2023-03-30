const CrudRepository = require("./crud-repository");
const { Airport, City } = require("../models");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }

  async get(modelId) {
    try {
      const result = await this.model.findOne({
        where: {
          id: modelId,
        },
        include: { model: City, attributes: ["name"] },
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in the crud repo");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
