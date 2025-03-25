'use client'

import { createContext, useContext, useState, useEffect } from 'react';

export const SizeContext = createContext();

export const useScreenSizeContext = () => useContext(SizeContext);

export const SizeProvider = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    
    const handleChange = (event) => {
      setIsDesktop(event.matches);
    };

    // Set initial value
    setIsDesktop(mediaQuery.matches);

    // Add event listener
    mediaQuery.addEventListener('change', handleChange);

    // Clean up
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <SizeContext.Provider value={{ isDesktop }}>
      {children}
    </SizeContext.Provider>
  );
};
