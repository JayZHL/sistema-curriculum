'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curriculum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Curriculum.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull:false
    },
    contenido: {
      type: DataTypes.STRING,
      allowNull:false
    },
    url:  {
      type: DataTypes.BLOB,
      allowNull:false
    },
    candidatoid: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Curriculum',
  });
  return Curriculum;
};