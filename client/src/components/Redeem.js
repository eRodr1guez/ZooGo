import React from "react";
import "../assets/css/redeem.css";

const Redeem = () => {
  return (
    <div className="redeem">
      <img
        className="coins"
        src={require("../assets/images/coins_red.svg")}
        alt="drink"
      />
      <h2 className="font-red">Yay!</h2>
      <p>You have traded 70 points for</p>

      <img
        className="item"
        src={require("../assets/images/soda.jpg")}
        alt="drink"
      />
      <h3 className="font-red">Large Fountain Drink</h3>

      <div className="bottom">
        <p>Show this screen at the nearest food kiosk to get your prize.</p>
        <h4>Redemption code: 23LFD20</h4>
      </div>
    </div>
  );
};

export default Redeem;
