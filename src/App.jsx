import React, { Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Loading from './components/Loading';

import { useAuth } from './context/AuthContext';

const Navbar = React.lazy(() => import('./components/Navbar'));
const Footer = React.lazy(() => import('./components/Footer'));
const SolutionPage = React.lazy(() => import('./components/SolutionPage'));
const Contact = React.lazy(() => import('./components/Contact'));
const Login = React.lazy(() => import('./components/Login'));
const AboutUs = React.lazy(() => import('./components/AboutUs'));
const OurWorks = React.lazy(() => import('./components/OurWorks'));
const OurTeam = React.lazy(() => import('./components/OurTeam'));
const Careers = React.lazy(() => import('./components/Careers'));
const NewsMedia = React.lazy(() => import('./components/NewsMedia'));
const HomeCity = React.lazy(() => import('./components/HomeCity'));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));
const CustomerReviews = React.lazy(() => import('./components/CustomerReviews'));

// Home Page Component
function HomePage() {
  return (
    <div className="home-content-wrapper">
      <HomeCity />

      <OurWorks />
      <AboutUs />
      <CustomerReviews />
      <Contact />
    </div>
  )
}

// Customer Reviews Page Component
function ReviewsPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <CustomerReviews />

    </>
  )
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const isLoginPage = location.pathname === '/login';


  React.useEffect(() => {
    if (currentUser && !currentUser.emailVerified && !isLoginPage) {
      navigate('/login');
    }
  }, [currentUser, isLoginPage, navigate]);



  return (
    <div className="app-container">
      <Suspense fallback={<Loading />}>
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-media" element={<NewsMedia />} />

          {/* Solution Pages Routes */}
          <Route path="/solutions/:solutionType" element={<SolutionPage />} />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />
        </Routes>
        {!isLoginPage && <Footer />}
      </Suspense>
    </div>
  )
}

export default App;
