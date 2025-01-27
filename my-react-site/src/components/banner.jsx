import React from 'react';
import Logoblack from '../assets/img/logoblackwhite.webp';
import Portret from '../assets/img/portret.jpg';

import '../assets/css/Banner.css';
const Banner = () => {
    return (
        <section className='SectionBanner'>
            <img src={Portret} alt="Portret" className="SectionBanner" />
            <img src={Logoblack} alt="Logo" className="SectionBanner" />
        </section>
    );
};

export default Banner;