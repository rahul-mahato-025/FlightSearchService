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

    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelName: "Airbus A333-300",
          capacity: 440,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelName: "Airbus A340-500",
          capacity: 372,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelName: "Boeing 777-200",
          capacity: 440,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelName: "Boeing 747-400",
          capacity: 416,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
