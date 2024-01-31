import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";
import { useState } from "react";
import fakeData from "fakeData.json";

const Router = () => {
  const [letters, setLetters] = useState(fakeData);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home letters={letters} setLetters={setLetters} />}
        />
        <Route
          path="detail/:id"
          element={<Detail letters={letters} setLetters={setLetters} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
