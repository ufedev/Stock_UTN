// GUIA https://expressjs.com/en/guide/routing.html
// Importar Express
import express from "express"
import dotenv from "dotenv"
import { sequelize } from './config/db.mjs'
import { Product } from "./models/products.mjs"
// Crear servidor Express
const app = express()
dotenv.config()
// Agregar a express el soporte para JSON
app.use(express.json())
// Crear Ruta GET para obtener productos
app.get("/", async function(req, res) {
  // de req.query obtenemos todo lo que esta despues
  // de el ? en la url
  // pe: http://localhost:3000/?id=1
  // obtenemos {id:1}
  res.json(req.query)
})
// Crear Ruta POST para crear producto
app.post('/', async (req, res) => {

  res.json(req)
})

// Crear Ruta PUT para modificar producto

app.put("/", async (req, res) => {
  res.json("ruta put")
})

// Crear Ruta DELETE para eliminar un producto
app.delete("/", async (req, res) => {
  res.json("Ruta DELTE")
})

// Iniciar servidor express
app.listen(3000, () => {
  console.log("servidor iniciado en puerto http://localhost:3000")
  sequelize.sync()
  // Dentro de la función hay que agregar sequelize.sync()
})

