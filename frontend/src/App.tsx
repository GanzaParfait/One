import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import AddProduct from './components/Form.tsx'
import ViewData from './components/ViewData.tsx'
import Footer from './components/Footer.tsx'
import Settings from './components/Settings.tsx'
import UpdateProduct from './components/UpdateProduct.tsx'

function App () {
  return (
    <Router>
      <div className='container mt-5'>
        <Navbar />
        <Routes>
          <Route path='/' element={<ViewData />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/update-product' element={<UpdateProduct />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
