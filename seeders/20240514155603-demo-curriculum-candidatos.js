'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CurriculumCandidatos', [{
      candidatoid: 1,
      curriculumid: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        candidatoid: 2,
        curriculumid: 2,
        createdAt: new Date(),
        updatedAt: new Date()    
    }], {}); 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('CurriculumCandidatos', null, {});
  }
};
