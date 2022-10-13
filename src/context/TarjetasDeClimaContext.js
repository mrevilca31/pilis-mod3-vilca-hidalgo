import { createContext, useState } from "react";

export const TarjetasDeClimaContext = createContext({
  tarjetasDeClima: [],
  setTarjetasDeClima: () => {},
});

export const TarjetasDeClimaProvider = ({ children }) => {
  const [tarjetasDeClima, setTarjetasDeClima] = useState([]);
  const value = { tarjetasDeClima, setTarjetasDeClima };

  return (
    <TarjetasDeClimaContext.Provider value={value}>
      {children}
    </TarjetasDeClimaContext.Provider>
  );
};
