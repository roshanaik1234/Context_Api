import { createContext, useState } from "react";

export const NowCont = createContext();

export const NowContProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <NowCont.Provider value={{ count, setCount }}>
      {children}
    </NowCont.Provider>
  );
};
