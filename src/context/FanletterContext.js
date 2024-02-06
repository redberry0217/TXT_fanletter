import { createContext } from "react";
import { useState } from "react";
import fakeData from "fakeData.json";

export const FanletterContext = createContext(null);

function FanletterContextProvider({ children }) {
  const [letters, setLetters] = useState(fakeData);
  return (
    <FanletterContext.Provider value={{ letters, setLetters }}>
      {children}
    </FanletterContext.Provider>
  );
}

export default FanletterContextProvider;
