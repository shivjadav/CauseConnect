import React, { createContext, useState, useContext, useEffect } from 'react';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const startLoading = () => {
    // This toggles the state
    
    setTimeout(() => setIsLoading(true), 10); // Then sets it to true after a brief delay
  };
  
  const stopLoading = () => {
     // This toggles the state
    setTimeout(() => setIsLoading(false), 10); // Then sets it to false after a brief delay
  };

 
  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
