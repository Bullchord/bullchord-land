import React from 'react'
import Docs from '../pages/Docs/Docs'
import Artistes from '../pages/Artist/Artists'
import Team from '../pages/Team/Team'
import Tokenomics from '../pages/Token/Token'
import Home from '../components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Navigation from '../components/Navbar/Navbar'
import './layout.css'
import Footer from '../components/Footer/Footer'
import ArtisteData from '../ArtisteData'

const Layouts = () => {
  return (
    <div className="layout-container">
      <Navigation />
      <div className="layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/artistes" element={<Artistes />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/artisteform" element={<ArtisteData />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default Layouts
