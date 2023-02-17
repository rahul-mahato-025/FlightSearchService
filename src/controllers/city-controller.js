const { CityService } = require("../services");

const cityService = new CityService();

/**
 * METHOD  - POST
 * URL     - api/v/city/create
 */

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "City created successfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create city",
      error: error,
    });
  }
};

/**
 * METHOD  - DELETE
 * URL     - api/v/city/:id
 */

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "City deleted successfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to delete city",
      error: error,
    });
  }
};

/**
 * METHOD  - PATCH
 * URL     - api/v/city/:id
 */

const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: city,
      success: true,
      message: "City updated successfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to update city",
      error: error,
    });
  }
};

/**
 * METHOD  - GET
 * URL     - api/v/city/:id
 */

const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "City fetched successfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch city",
      error: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
};
