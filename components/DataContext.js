import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setStoredData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, setStoredData }}>
      {children}
    </DataContext.Provider>
  );
};
