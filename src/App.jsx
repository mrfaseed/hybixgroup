import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CustomerReviews from './components/CustomerReviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SolutionPage from './components/SolutionPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <div style={{ minHeight: '100vh', padding: '100px 20px 20px', backgroundColor: '#ffffff' }}>
                <h1 style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', color: '#1e293b' }}>Welcome to Hybix Group</h1>
                <p style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', color: '#64748b' }}>Scroll down to see our customer reviews.</p>
                <div style={{ height: '400px' }}></div>
              </div>
              <CustomerReviews />
              <Contact />
            </>
          } />

          {/* Solution Pages Routes */}
          <Route path="/solutions/:solutionType" element={<SolutionPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
