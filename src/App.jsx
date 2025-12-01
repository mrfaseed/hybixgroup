import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Loading from './components/Loading';
import './App.css';

// Lazy load pages
const Home = lazy(() => import('./components/Home'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const SolutionPage = lazy(() => import('./components/SolutionPage'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/solutions" element={<SolutionPage />} />
          <Route path="/solutions/:solutionType" element={<SolutionPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
