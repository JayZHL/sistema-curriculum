'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CurriculumCandidato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CurriculumCandidato.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    candidatoid: {
      type: DataTypes.INTEGER
    },
    curriculumid:{
      type:DataTypes.INTEGER
    } 
  }, {
    sequelize,
    modelName: 'CurriculumCandidato',
  });
  return CurriculumCandidato;
};