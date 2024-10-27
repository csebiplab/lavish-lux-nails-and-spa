import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';
import FeelOurLuxurious from './FeelOurLuxurious/FeelOurLuxurious';
import OurServices from './OurServices/OurServices';
import Gallery from './Gallery/Gallery';
import BookAnAppointment from './BookAnAppointment/BookAnAppointment';
import Review from './Review/Review';
import BannerSession from './BannerSession/BannerSession';

const Homepage = () => {
    return (
        <div className="custom-container">
            <section>
                <BannerSession/>
            </section>

            <section>
                <AboutUs/>
            </section>

            <section>
                <FeelOurLuxurious/>
            </section>

            <section>
                <Services/>
            </section>

            <section className="padding__top">
                <OurServices/>
            </section>

            <section>
                <Gallery/>
            </section>

            <section>
                <Review/>
            </section>

            <section>
                <BookAnAppointment/>
            </section>
        </div>
    );
};

export default Homepage;