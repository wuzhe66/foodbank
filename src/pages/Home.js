import React, { useContext } from 'react';
import { ThemeContext } from '../context';
import "./Home.css"

export default function Home() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className='home'
        style={{
          // backgroundColor: darkMode ? "#595959" : "white",
          color: darkMode && "black",
        }}
      >

        <div className='home-left'>
          <div className="home-left-wrapper">
            Now more than ever, <br />
            serving our neighbors in need.
          </div>

        </div>
        <div className = "home-right"></div>

      </div>

    </>
  )

}