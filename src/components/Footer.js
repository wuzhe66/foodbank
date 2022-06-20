import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/footer.css";

const Footer = () => {
    return (
        <div className="f-container">
            <div className="f-row">
                <div className="f-col">
                    <img src="/images/logo/logo_day.png" alt="" />
                    <p>With Too Good To Go earn money from leftovers! Is your restaurant's food going in the trash? Sign up and help fight food shortage for those help-needed.</p>
                </div>
                <div className="f-col">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/grab">Grab</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="f-col">
                <h2>Quick Links</h2>
                    <ul>
                        <li>
                            <NavLink to="/">Motivation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Team</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Goal</NavLink>
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