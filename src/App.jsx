import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CustomerReviews from './components/CustomerReviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      {/* Main content placeholder */}
      <div style={{ minHeight: '100vh', padding: '100px 20px 20px', backgroundColor: '#ffffff' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', color: '#1e293b' }}>Welcome to Hybix Group</h1>
        <p style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', color: '#64748b' }}>Scroll down to see our customer reviews.</p>
        <div style={{ height: '400px' }}></div> {/* Spacer to test scrolling */}
      </div>

      <CustomerReviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
