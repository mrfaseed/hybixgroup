import React, { Suspense, lazy } from 'react';
import Loading from './Loading';

const CustomerReviews = lazy(() => import('./CustomerReviews'));
const Contact = lazy(() => import('./Contact'));

const Home = () => {
    return (
        <>
            <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                <h1 style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', color: '#1e293b' }}>Welcome to Hybix Group</h1>
                <p style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', color: '#64748b' }}>Scroll down to see our customer reviews.</p>
                <div style={{ height: '400px' }}></div> {/* Spacer to test scrolling */}
            </div>

            <Suspense fallback={<Loading />}>
                <CustomerReviews />
            </Suspense>

            <Suspense fallback={<Loading />}>
                <Contact />
            </Suspense>
        </>
    );
};

export default Home;
