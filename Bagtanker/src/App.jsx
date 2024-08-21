import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import LandingPage from './pages/LandingPage'
import ProductsPage from './pages/ProductsPage'
import ProductList from './components/Products/ProductList'
import ProductDetail from './components/Products/ProductDetail'
import './App.scss'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path=":home" element={<Layout />}>
            <Route path=":produkter" element={<ProductsPage />}>
              <Route path=":category" element={<ProductList />} />
              <Route path=":category/:slug" element={<ProductDetail />} />



            </Route>
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
