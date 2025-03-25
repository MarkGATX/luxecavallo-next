'use client'

import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';


// Initialize new context for menu
export const MenuContext = createContext();

// custom hook to use the menu context in other components
export const useMenuContext = () => useContext(MenuContext);

// MenuProvider component that holds initial state, returns provider component
export const MenuProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
      };


  return (
    <MenuContext.Provider value={{isMenuOpen, toggleMenu}}>
      {children}
    </MenuContext.Provider>
  );
};