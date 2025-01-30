import React, { useState, useEffect } from 'react';
import AppLayout from './layout';
import Dashboard from './dashboard';
import navApp from './navLayout';

const Index = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  // Update the state when the window size changes
  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AppLayout>
      {isResponsive ? <navApp /> : <Dashboard />}
    </AppLayout>
  );
};

export default Index;
