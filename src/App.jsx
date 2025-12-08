import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CustomerReviews from './components/CustomerReviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SolutionPage from './components/SolutionPage'

const Login = React.lazy(() => import('./components/Login'));
import AboutUs from './components/AboutUs'
import OurWorks from './components/OurWorks'
import OurTeam from './components/OurTeam'
import Careers from './components/Careers'
import NewsMedia from './components/NewsMedia'


import HomeCity from './components/HomeCity'
import ScrollToTop from './components/ScrollToTop'

// Home Page Component
function HomePage() {
  return (
    <>
      <HomeCity />
      <AboutUs />
      <OurWorks />
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
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="app-container">
      {!isLoginPage && <Navbar />}
      <ScrollToTop />

      <Routes>
        {/* Home Route */}
        <Route path="/" element={<HomePage />} />

        {/* Company Routes */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/news-media" element={<NewsMedia />} />
        <Route path="/contact" element={<Contact />} />

        {/* Solution Pages Routes */}
        <Route path="/solutions/:solutionType" element={<SolutionPage />} />

        {/* Login Route */}
        <Route path="/login" element={
          <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020617', color: '#fff' }}>Loading...</div>}>
            <Login />
          </Suspense>
        } />
      </Routes>

      {!isLoginPage && <Footer />}
    </div>
  )
}

export default App;
