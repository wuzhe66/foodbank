import React, { useContext } from "react";
import { ThemeContext } from "../context";
import { Link } from "react-router-dom";
import "./Home.css";
import CounterData from "../components/CounterData";
import Newsletter from "../components/Newsletter";
import CategoryMain from "../components/CategoryMain";

export default function Home() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const number1 = 600;

  return (
    <>
      <div
        className="home"
        style={{
          // backgroundColor: darkMode ? "#595959" : "white",
          color: darkMode && "black",
        }}
      >
        <div className="home-left">
          <div className="home-left-word">
            Now more than ever, <br />
            serving our neighbors in need.
          </div>

          <div className="home-button-wrapper">
            <Link to="/getfood">
              <button type="button" className="home-button">
                Get Food
              </button>
            </Link>

            <Link to="/post">
              <button type="button" className="home-button">
                Give Help
              </button>
            </Link>
          </div>
        </div>

        <div className="home-right"></div>
      </div>

      <CounterData />
      <CategoryMain />
      <Newsletter />
    </>
  );
}
