import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";
import { useState } from "react";
import fakeData from "fakeData.json";
import { FanletterContext } from "context/FanletterContext";

const Router = () => {
  const [letters, setLetters] = useState(fakeData);
  return (
    <FanletterContext.Provider
      value={{
        letters,
        setLetters,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </FanletterContext.Provider>
  );
};

export default Router;
