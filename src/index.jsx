/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 13 novembre 22h00
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import SingleProduct from './pages/SingleProduct'
import PageError from './pages/PageError'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.createRoot
(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

/*
<Route path="products/:productId" element={SingleProduct />} />
*/