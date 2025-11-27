import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      {/* Main content placeholder */}
      <div style={{ minHeight: '100vh', padding: '20px', backgroundColor: '#f8fafc' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', color: '#1e293b' }}>Welcome to Hybix Group</h1>
        <p style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', color: '#64748b' }}>Scroll down to see the footer.</p>
      </div>

      <Footer />
    </div>
  )
}

export default App
