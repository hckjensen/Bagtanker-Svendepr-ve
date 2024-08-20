import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import LandingPage from './pages/LandingPage'
import ProductsPage from './pages/ProductsPage'

import './App.scss'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Layout />}>
              {/* <Route index element={<ProductsPage />} /> */}
              <Route path="products" element={<ProductsPage />}>
                <Route path=":category" element={<ProductsPage />}>
                  <Route path=":productId" element={<ProductsPage />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
