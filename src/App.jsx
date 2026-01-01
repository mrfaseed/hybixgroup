import React, { Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'
import './App.css'
import './App.css'
import Loading from './components/Loading';
import SEO from './components/SEO';

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
const OurClients = React.lazy(() => import('./components/OurClients'));
const LearnMore = React.lazy(() => import('./components/LearnMore'));
const CaseStudies = React.lazy(() => import('./components/CaseStudies'));
const NotFound = React.lazy(() => import('./components/NotFound'));


function HomePage() {
  return (
    <div className="home-content-wrapper">
      <SEO
        title="Home"
        description="Hybix Group - Your partner for Tech, App Development, AI, ML, and Editing. We build the future."
        keywords="tech, app, ml, ai, editing, web development, hybix group"
      />
      <Suspense fallback={<Loading />}>
        <HomeCity />
      </Suspense>


      <Suspense fallback={<div className="section-loader">Loading content...</div>}>
        <OurWorks />
      </Suspense>

      <Suspense fallback={<div className="section-loader">Loading info...</div>}>
        <AboutUs />
      </Suspense>

      <Suspense fallback={<div className="section-loader">Loading clients...</div>}>
        <OurClients />
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


function ReviewsPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <CustomerReviews />

    </>
  )
}

function ClientsPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <OurClients />
    </>
  )
}


const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const isAdminAuthenticated = sessionStorage.getItem('isAdminAuthenticated') === 'true';

  if (!currentUser || !isAdminAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

// import ComingSoon from './components/ComingSoon'; // Converted to lazy load below

// ... (retain imports if needed for future, but for now we just show ComingSoon)

// function App() {
//   return <ComingSoon />;
// }
// The above was the previous static return. We will now use lazy loading.

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
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-clients" element={<ClientsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-media" element={<NewsMedia />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/solutions/enterprise-erp" element={<LearnMore topic="Enterprise ERP" />} />
          <Route path="/solutions/data-analytics" element={<LearnMore topic="Data Analytics" />} />
          <Route path="/solutions/business-intelligence" element={<LearnMore topic="Business Intelligence" />} />
          <Route path="/solutions/automation" element={<LearnMore topic="Automation" />} />
          <Route path="/solutions/:solutionType" element={<SolutionPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {
        !isLoginPage && location.pathname !== '/admin-dashboard' && (
          <Suspense fallback={<div className="h-20" />}>
            <Footer />
          </Suspense>
        )
      }
    </div >
  )
}

export default App;
