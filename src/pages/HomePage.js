import React from 'react';
import HeroSectionNew from '../components/HomePage/HeroSectionNew';

function HomePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HeroSectionNew />
        </div>
    );
}

export default HomePage;
