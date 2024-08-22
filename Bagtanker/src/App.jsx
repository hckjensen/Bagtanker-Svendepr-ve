import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import LandingPage from './pages/LandingPage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import ProductList from './components/Products/ProductList'
import ProductDetail from './components/Products/ProductDetail'
import NewsPage from './pages/NewsPage'

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
            <Route path="nyheder" element={<NewsPage />} />
            <Route path="kontakt" element={<ContactPage />} />
            <Route path="login" element={<LoginPage />} />


          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
