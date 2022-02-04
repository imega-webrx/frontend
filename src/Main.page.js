import React from "react";

import Footer from "./Layout/Footer";

import {
    Newsletter,
    Ready,
    Feature,
    MainInfo,
    Hero,
    SearchSection,
} from "./Layout/Sections";

const Main = () => {
    return (
        <React.Fragment>
            <SearchSection />
            <Hero />
            <Ready />
            <MainInfo />
            <Feature />
            <Newsletter />
            <Footer />
        </React.Fragment>
    );
};

export default Main;
