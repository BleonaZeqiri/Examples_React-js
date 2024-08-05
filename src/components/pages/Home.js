import React from "react";
import User from "../User";
import Browser from "../Browser";
import Popup from "../Popup";
import State from "../State";

const Home = () => {
  return (
    <div className="home-page">
      <User />
      <Browser />
      <State />
      <Popup />
    </div>
  );
};

export default Home;
