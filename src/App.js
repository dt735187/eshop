import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

import { Header,Footer } from './components'

import { Home,Contact } from './pages'

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
    
    </>
  )
}

export default App