/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 15 novembre 12h00
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import HomeTest from './pages/HomeTest'
import SingleProduct from './pages/SingleProduct'
import PageError from './pages/PageError'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/index.css'

ReactDOM.createRoot
(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/hometest" element={<HomeTest/>} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)