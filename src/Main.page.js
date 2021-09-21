import React from "react";


import Footer from "./Layout/Footer";

import {
    Newsletter,
    Ready,
    Feature,
    Hero,
    SearchSection,
} from "./Layout/Sections";

const Main = () => {
    return (
        <React.Fragment>
            <SearchSection />
            <Hero />
            <Ready />
            <Feature />
            <Newsletter />
            <Footer />
        </React.Fragment>
    );
};

export default Main;
