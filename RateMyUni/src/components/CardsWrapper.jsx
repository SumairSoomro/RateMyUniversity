import React from "react";
import Analyzecuate from "../assets/Analyze-cuate.svg";
import Chartscuate from "../assets/Charts-cuate.svg";
import Analyticspana from "../assets/Analytics-pana.svg";
import "./styling/CardsWrapper.css";

function  CardsWrapper() {
  return (
    <div className="CardsWrapper">
      <div>
        <div>
          <img src={Analyzecuate} alt="" />
          <h1>Enter University Name</h1>
          <p>
            Search for your university to see ratings, reviews, and detailed information
          </p>
        </div>
        <div>
          <img src={Chartscuate} alt="" />
          <h1>Get List of Universities</h1>
          <p>Browse universities worldwide with detailed profiles and user reviews.</p>
        </div>
        <div>
          <img src={Analyticspana} alt="" />
          <h1>Checkout The Ratings</h1>
          <p>
            See student reviews on academics, social life, and campus experiences
          </p>
        </div>
      </div>
    </div>
  );
};


export default CardsWrapper;
