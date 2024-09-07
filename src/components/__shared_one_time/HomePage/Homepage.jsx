import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';
import FeelOurLuxurious from './FeelOurLuxurious/FeelOurLuxurious';
import OurServices from './OurServices/OurServices';
import Gallery from './Gallery/Gallery';
import Treatment from './Treatment/Treatment';
import BookAnAppointment from './BookAnAppointment/BookAnAppointment';
import Banner from './Banner/Banner';
import Review from './Review/Review';

const Homepage = () => {
    return (
        <div className="custom-container">
            <section>
                <Banner/>
            </section>
            
            <section>
                <Treatment/>
            </section>

            <section>
                <AboutUs/>
            </section>

            <section>
                <FeelOurLuxurious/>
            </section>

            <section className="padding__top">
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