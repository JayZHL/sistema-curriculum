'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Curriculums', [{
      titulo: 'Titulo 1',
      contenido: 'Contenido 1',
      url: 'https://curriculum1.json',
      candidatoid: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        titulo: 'Titulo 2',
        contenido: 'Contenido 2',
        url: 'https://curriculum2.json',
        candidatoid: 2,
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
    await queryInterface.bulkDelete('Curriculums', null, {});
  }
};
