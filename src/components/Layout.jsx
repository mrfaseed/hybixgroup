import React, { Suspense, lazy } from 'react';
import Loading from './Loading';

const Navbar = lazy(() => import('./Navbar'));
const Footer = lazy(() => import('./Footer'));

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <Suspense fallback={<div style={{ height: '80px', background: 'white' }}></div>}>
                <Navbar />
            </Suspense>

            <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 400px)' }}>
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </main>

            <Suspense fallback={<Loading />}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default Layout;
