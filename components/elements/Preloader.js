import React from 'react';

const Preloader = () => {
    return (
        <>
            <div id="preloader-active">
            <div className="preloader flex-1 content-center">
                <div className="logo absolute inset-y-1/4 jump">
                    <img src="/favicon.ico" alt="Kinetics Business Intelligence" />
                </div>
            </div>
        </div>
        </>
    );
};

export default Preloader;