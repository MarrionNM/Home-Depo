import { useState, useEffect, createContext } from "react";
import { Housedata } from "@component/pages/api/houseData";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {

  const [houses, setHouses] = useState(Housedata);
  const [price, setprice] = useState('Price range (any)');
  const [loading, setloading] = useState(false);
  const [house, setHouse] = useState();
  
  useEffect(() => {
    const allCountries = houses.map((houses) =>{
      return houses;
    });
  },
  []);

  return (
    <HouseContext.Provider value={{houses, price, loading}}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
