import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CustomerReviews from './components/CustomerReviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Home Page Component
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
    </>
  )
}

// Customer Reviews Page Component
function ReviewsPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <CustomerReviews />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        {/* Home Route */}
        <Route path="/" element={<HomePage />} />

        {/* Customer Reviews Route */}
        <Route path="/reviews" element={<ReviewsPage />} />

        {/* Solution Pages Routes */}
        <Route path="/solutions/:solutionType" element={<SolutionPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;
