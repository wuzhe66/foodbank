import React from "react";
import "../styles/introduction.css";

const Introduction = () => {
  return (
    <div className="in-container">
      <div className="in-row">
        <div className="in-col">
          <div className="category-content-in">
            <h3>Motivation</h3>
            <p>Considering that many restaurants, bakeries etc. handle a lot of food that are about to expire every day, on the other hand, many people are starving and have no money buy the food by themselves, so our food bank website was born. </p>
          </div>
        </div>
        <div className="in-col">
          <div className="category-content-in">
            <h3>Team</h3>
            <p>As a startup website application, The food bank made by The BigBang team in 2022, the team member all learning from JohnAbbott college FSD program. They are all keen on language programming and refine their ideas into the code to achieve them.</p>
          </div>
        </div>
        <div className="in-col">
          <div className="category-content-in">
            <h3>Goal</h3>
            <p>Our mission is to circulate food and pass excess food to those who need it, reject waste and keep people from starving, so that our society can achieve green and sustainable development. We will also improve the usability of the website.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
