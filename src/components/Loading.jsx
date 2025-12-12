import React from 'react';

const Loading = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            backgroundColor: '#020617',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999
        }}>
            <div className="loader"></div>
            <style>{`
                .loader {
                    width: 48px;
                    height: 48px;
                    border: 5px solid #1e293b;
                    border-bottom-color: #3b82f6;
                    border-radius: 50%;
                    display: inline-block;
                    box-sizing: border-box;
                    animation: rotation 1s linear infinite;
                }

                @keyframes rotation {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default Loading;
