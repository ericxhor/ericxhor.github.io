import React, { useEffect, useState } from 'react';

function FadeToBlack() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setFade(true);
      } else {
        setFade(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fade-to-black ${fade ? 'visible' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: fade ? 0.5 : 0,
        transition: 'opacity 0.5s ease-in-out',
        zIndex: 999,
        pointerEvents: fade ? 'auto' : 'none',
      }}
    />
  );
}

export default FadeToBlack;
