import { Input } from './Input'
import { useState } from 'react'
import { toast } from "react-toastify"
export const ProductForm = () => {

  // Los estados
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  // Los manejadores
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      /**
       * config
       * 
       */
      const config = {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },

        body: JSON.stringify({
          name: name,
          price: price,
          stock: stock
        })
      }
      const url = "http://localhost:3000/"
      const req = await fetch(url, config)
      const res = await req.json()
      if (res.error) {
        toast.error(res.msg)
        return
      }

      toast.success(res.msg)
      setName("")
      setPrice("")
      setStock("")


    } catch (er) {
      console.log(er)
      alert("Ha ocurrido un error")
    }

  }


  // Los efectos

  return (
    <div className='mt-5 p-5 gap-5 flex flex-col justify-center items-center'>
      <h2 className='text-4xl font-bold'>Producto</h2>

      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
      >

        <Input
          type="text"
          name="Nombre_Producto"
          placeholder="Ingrese el producto"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <Input
          type="number"
          name="Precio"
          placeholder="Ingrese el precio"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value)
          }}
        />
        <Input
          name="Cantidad"
          type="number"
          placeholder="Ingrese la cantidad"
          value={stock}
          onChange={(e) => {
            setStock(e.target.value)
          }}
        />
        <button
          className="p-2 mt-5 border-[1px] bg-slate-950 text-slate-100 font-black rounded hover:bg-green-600"
        >Cargar</button>
      </form>

    </div>)
}
