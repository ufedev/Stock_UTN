import { useEffect, useState } from 'react'
import { Container } from './Container'
import { toast } from 'react-toastify'
import { ProductRow } from './ProductRow'
export const ProductList = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    const getProduct = async () => {
      const req = await fetch('http://localhost:3000', {
        headers: {
          'content-type': 'application/json',
          accept: 'application/json'
        }
      })
      const res = await req.json()
      if (res.error) {
        toast.error(res.msg)
        return
      }
      setData(res.data)
    }

    getProduct()
  }, [])


  async function handleDelete(id) {
    toast.info(`${id} fue eliminado`)
  }




  return (

    <Container>
      {
        data.map((d) => <ProductRow key={d.id} data={d} onDelete={handleDelete} />)
      }
    </Container>
  )
}
