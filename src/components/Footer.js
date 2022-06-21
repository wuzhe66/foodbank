import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import "../styles/footer.css";
import { ThemeContext } from "../context";


const Footer = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    
    return (
        <div className="f-container"
            style={{
                background: darkMode && "#595959",
            }}>
            <div className="f-row">
                <div className="f-col">
                    <img src="/images/logo/logo_day.png" alt="" />
                    <p>With Too Good To Go earn money from leftovers! Is your restaurant's food going in the trash? Sign up and help fight food shortage for those help-needed.</p>
                </div>
                <div className="f-col">
                    <h2>GET FOOD</h2>
                    <ul class='f-col.text'>
                        <li>
                            <NavLink to="/getfood">Grab food</NavLink>
                        </li>
                        <li>
                            <NavLink to="/kids">Meals for Kids</NavLink>
                        </li>
                        <li>
                            <NavLink to="/nutrition">Nutrition Center</NavLink>
                        </li>
                        <li>
                            <NavLink to="/development">Goals</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="f-col">
                    <h2>GIVE HELP</h2>
                    <ul>
                        <li>
                            <NavLink to="/post">Start Donation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/volunteers">Volunteer</NavLink>
                        </li>
                        <li>
                            <NavLink to="/help">Funds</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="f-col">
                    <h2>Keep in touch</h2>
                    <div className='socials'>
                        <a href="/"><img src="/images/socials/facebook.png" alt="" /></a>
                        <a href="/"><img src="/images/socials/instagram.png" alt="" /></a>
                        <a href="/"><img src="/images/socials/twitter.png" alt="" /></a>
                        <a href="/"><img src="/images/socials/youtube.png" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="f-copyrow">
                <p>&copy; 2022. All Rights Reserved. Powered by WuzheQin, ZhenFang, TingtingXu.</p>
            </div>
        </div>
    )
}

export default Footer;