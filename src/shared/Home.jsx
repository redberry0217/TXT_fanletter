import React from "react";
import Layout from "components/Layout";
import { useLocation } from "react-router-dom";

function Home({ letters, setLetters }) {
  const location = useLocation();
  const toWhom = location.state && location.state.previousValue;
  console.log(location);

  return <Layout letters={letters} setLetters={setLetters} toWhom={toWhom} />;
}

export default Home;
