import { useEffect } from 'react'
import { Container } from './Container'

export const ProductList = () => {
  useEffect(() => {
    const getProduct = async () => {
      const req = awaiti fetch('http://localhost:3000', {
        headers: {
          'content-type': 'application/json',
          accept: 'application/json'
        }
      })
      const res = await req.json()
      console.log(res)
    }

    getProduct()
  }, [])
  return (

    <Container>

    </Container>
  )
}
