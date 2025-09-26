// Crear conexión a bases de datos con SEQUELIZE
// https://sequelize.org/docs/v6/getting-started/
// Mirar opción 3 de la guia de sequelize
// Utilizar variables de entorno para la conexion
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  "stock",
  "root",
  "aezakmi",
  {
    dialect: "mysql",
    host: "localhost",
    port: 3306
  })
