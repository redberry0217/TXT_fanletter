import React from "react";
import Layout from "components/Layout";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const toWhom = location.state && location.state.previousValue;
  console.log(location);

  return <Layout toWhom={toWhom} />;
}

export default Home;
