'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Candidatos', [{
        nombre: 'Juan Carlos',
        primerApellido: 'Huerta',
        segundoApellido: 'Llamas',
        email: 'juan.huerta@uabc.edu.mx',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Adolfo',
        primerApellido: 'Ruelas',
        segundoApellido: 'test',
        email: 'correo@uabc.edu.mx',
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
    await queryInterface.bulkDelete('Candidatos', null, {});
  }
};
