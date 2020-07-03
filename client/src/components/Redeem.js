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
      <p>You have successfully redeemed a prize!</p>

      <div className="box">
        <p>Show this screen at the nearest food kiosk to get your prize.</p>
        <h4>Redemption code: 23LFD20</h4>
      </div>
    </div>
  );
};

export default Redeem;
