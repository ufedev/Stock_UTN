import { BrowserRouter, Routes, Route } from "react-router"
import { ProductForm } from './components/ProductForm'
import { ProductList } from './components/ProductList'
import { ToastContainer } from "react-toastify"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product" element={<ProductForm />} />
        <Route path="*" element={<h1>404 no encontrado</h1>} />
      </Routes>
      <ToastContainer
        theme="colored"
      />
    </BrowserRouter>
  )
}

export default App
