import React, { Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'
import './App.css'
import Loading from './components/Loading';

import { useAuth } from './context/AuthContext';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import ChatBot from './components/ChatBot';

const Footer = React.lazy(() => import('./components/Footer'));
const SolutionPage = React.lazy(() => import('./components/SolutionPage'));
const Contact = React.lazy(() => import('./components/Contact'));
const ConsultationPage = React.lazy(() => import('./components/ConsultationPage'));
const Login = React.lazy(() => import('./components/Login'));
const AdminLogin = React.lazy(() => import('./components/AdminLogin'));
const AdminDashboard = React.lazy(() => import('./components/AdminDashboard'));
const AboutUs = React.lazy(() => import('./components/AboutUs'));
const OurWorks = React.lazy(() => import('./components/OurWorks'));
const OurTeam = React.lazy(() => import('./components/OurTeam'));
const Careers = React.lazy(() => import('./components/Careers'));
const NewsMedia = React.lazy(() => import('./components/NewsMedia'));
const HomeCity = React.lazy(() => import('./components/HomeCity'));
const CustomerReviews = React.lazy(() => import('./components/CustomerReviews'));
const LearnMore = React.lazy(() => import('./components/LearnMore'));
const CaseStudies = React.lazy(() => import('./components/CaseStudies'));

function HomePage() {
  return (
    <div className="home-content-wrapper">
      {/* Hero Section - Loads first */}
      <Suspense fallback={<Loading />}>
        <HomeCity />
      </Suspense>

      {/* Subsequent sections load independently to speed up initial paint */}
      <Suspense fallback={<div className="section-loader">Loading content...</div>}>
        <OurWorks />
      </Suspense>

      <Suspense fallback={<div className="section-loader">Loading info...</div>}>
        <AboutUs />
      </Suspense>

      <Suspense fallback={<div className="section-loader">Loading reviews...</div>}>
        <CustomerReviews />
      </Suspense>

      <Suspense fallback={<div className="section-loader">Loading contact...</div>}>
        <Contact />
      </Suspense>
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

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const isAdminAuthenticated = sessionStorage.getItem('isAdminAuthenticated') === 'true';

  if (!currentUser || !isAdminAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/admin-login';


  React.useEffect(() => {
    if (currentUser && !currentUser.emailVerified && !isLoginPage) {
      navigate('/login');
    }
  }, [currentUser, isLoginPage, navigate]);



  return (
    <div className="app-container">
      {!isLoginPage && location.pathname !== '/admin-dashboard' && <Navbar />}
      <ScrollToTop />
      <ChatBot />
      <Suspense fallback={<Loading />}>
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
          <Route path="/learn-more" element={<LearnMore />} />

          {/* Solution Pages Routes */}
          <Route path="/solutions/:solutionType" element={<SolutionPage />} />

          {/* Consultation Route */}
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/case-studies" element={<CaseStudies />} />

          {/* Login Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Protected Admin Routes */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
      {!isLoginPage && location.pathname !== '/admin-dashboard' && (
        <Suspense fallback={<div className="h-20" />}>
          <Footer />
        </Suspense>
      )}
    </div>
  )
}

export default App;
