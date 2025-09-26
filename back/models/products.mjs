// Crear modelo a partir de SEQUELIZE
/*
 * el modelo debe contener
 * id INTEGER
 * name STRING
 * price FLOAT
 * stock INTEGER
 * created_at DATETIME  - Lo crea SEQUELIZE automaticamente
 * updated_at DATETIME - Lo crea SEQUELIZE automaticamente
 *
 */
// Guia https://sequelize.org/docs/v6/core-concepts/model-basics/
// Opción Extending Model
import { sequelize } from '../config/db.mjs'
import { DataTypes, Model } from 'sequelize'

export class Product extends Model { }

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      index: true
      // allowNull defaults to true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Product', // We need to choose the model name
    tableName: 'products'
  },
);






