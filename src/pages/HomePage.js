import React from 'react';
import HeroSectionNew from '../components/HomePage/HeroSectionNew';
// import ContactMe from '../components/HomePage/ContactMe';
// import AboutHome from '../components/HomePage/AboutHome';

function HomePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HeroSectionNew />
            {/* <AboutHome style={{ flexGrow: 1 }} />
            <ContactMe /> */}
        </div>
    );
}

export default HomePage;
