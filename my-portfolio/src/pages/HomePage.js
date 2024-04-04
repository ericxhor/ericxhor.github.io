import React from 'react';
import HeroSection from '../components/HeroSection';
import Sample from '../components/Sample';

function HomePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HeroSection />
            <Sample style={{ flexGrow: 1 }} />
        </div>
    );
}

export default HomePage;
