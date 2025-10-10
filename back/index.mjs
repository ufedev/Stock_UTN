// GUIA https://expressjs.com/en/guide/routing.html
// Importar Express
import express from "express"
import dotenv from "dotenv"
import { sequelize } from './config/db.mjs'
import { Product } from "./models/products.mjs"
import cors from 'cors'
import { where } from "sequelize"
// Crear servidor Express
const app = express()
dotenv.config()
// Agregar a express el soporte para JSON
app.use(express.json())
app.use(cors())
// Crear Ruta GET para obtener productos
app.get("/", async function(req, res) {
  // de req.query obtenemos todo lo que esta despues
  // de el ? en la url
  // pe: http://localhost:3000/?id=1
  // obtenemos {id:1}
  try {
    const products = await Product.findAll()
    res.json({
      error: false,
      data: products
    })
  } catch {
    res.json({
      error: true,
      msg: "No se pudieron cargar los productos"
    })
  }


})
// Crear Ruta POST para crear producto
app.post('/', async (req, res) => {

  try {
    const body = req.body
    if (Object.values(body).includes("")) {
      res.json({
        error: true,
        msg: "Todos los campos son obligatorios"
      })
      return
    }
    const product = new Product({
      name: body.name,
      price: Number(body.price),
      stock: Number(body.stock)
    })
    await product.save()
    res.json({
      error: false,
      msg: "Producto cargado"
    })
  } catch (err) {
    res.json({
      error: true,
      msg: err.message
    })
  }

})


// Crear Ruta PUT para modificar producto
app.get("/product", async (req, res) => {
  const query = req.query
  try {
    const product = await Product.findOne({
      where: {
        id: query.id
      }
    })
    if (!product) {
      res.status(404).json({
        error: true,
        msg: "Producto no encontrado"
      })
      return
    }

    res.json({
      error: false,
      product: product
    })

  } catch {
    res.status(500).json({
      error: true,
      msg: "Hubo un error en el servidor"
    })
  }


})
app.put("/", async (req, res) => {

  const query = req.query
  const body = req.body

  try {
    const product = await Product.findOne({
      where: {
        id: query?.id
      }
    })

    if (!product) {
      res.status(404).json({
        error: true,
        msg: "No se puede actualizar, porque no existe"
      })
      return
    }

    product.name = body.name
    product.stock = body.stock
    product.price = body.price

    await product.save()

    res.json({
      error: false,
      msg: "Producto actualizado"
    })


  } catch {
    res.status(500).json({
      error: true,
      msg: "Ocurrio un error al actualizar"
    })
  }

})

// Crear Ruta DELETE para eliminar un producto
app.delete("/", async (req, res) => {
  // https://localhost/?id=12313&nombre=Fede
  // Recuperamos en el backend de req.query
  // req.query={
  //   id:12313,
  //   nombre:"Fede"
  // }
  const query = req.query
  try {
    const product = await Product.findByPk(query.id)
    await product.destroy()

    res.json({
      error: false,
      msg: "Producto eliminado"
    })
  } catch {
    res.status(500).json({
      error: true,
      msg: "Ocurrio un error"
    })
  }
})

// Iniciar servidor express
app.listen(3000, () => {
  console.log("servidor iniciado en puerto http://localhost:3000")
  sequelize.sync()
  // Dentro de la función hay que agregar sequelize.sync()
})

