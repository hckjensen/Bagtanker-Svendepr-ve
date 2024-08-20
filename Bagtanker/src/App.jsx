import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import LandingPage from './pages/LandingPage'
import ProductList from './components/Products/ProductList'

import './App.scss'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path=":home" element={<Layout />}>
            <Route path=":produkter" element={<ProductList />}>
              <Route path=":category" element={<ProductList />}>
                <Route path=":productId" element={<ProductList />} />
              </Route>
            </Route>
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
