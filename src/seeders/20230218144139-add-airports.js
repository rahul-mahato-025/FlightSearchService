"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Airports", [
      {
        name: "Sonari Airport",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Netaji Subhash Chandra Bose International Airport",
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Behala Airport",
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kempegowda International Airport",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mysuru Airport",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
