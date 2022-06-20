import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Banners from '../components/Banners';
import CategoryMain from '../components/CategoryMain';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import './about.css';

const About = () => {
    return (
        <div className='about-container'>
            {/* <Navbar /> */}
            <Slider />
            <Banners />
            <CategoryMain />
            <Newsletter />
            {/* <Footer /> */}
        </div>
    )
}

export default About;