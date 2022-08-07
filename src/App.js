import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Header,Footer } from './components'
import AdminOnlyRoute from './components/adminOnlyRoute/AdminOnlyRoute';

import { Home,Contact, Login, Register, Reset, Admin } from './pages'

const App = () => {
  return (
    <>
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App