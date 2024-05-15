'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Candidato.hasMany(models.Curriculum, {
        foreignKey: "candidatoid",
        as: "candidato"
      });      
    }
  }
  Candidato.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull:false
    },
    primerApellido:{
      type: DataTypes.STRING,
      allowNull:false
    },
    segundoApellido:{
      type: DataTypes.STRING,
      allowNull: false
    }, 
    email: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Candidato',
  });
  return Candidato;
};