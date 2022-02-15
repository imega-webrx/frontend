import React from "react";

import Footer from "./Layout/Footer";

import {
    Newsletter,
    Ready,
    Feature,
    MainInfo,
    Hero,
    SearchSection,
    GoToBlog,
} from "./Layout/Sections";

const Main = () => {
    return (
        <React.Fragment>
            <SearchSection />
            <Hero />
            <Ready />
            <MainInfo />
            <Feature />
            <GoToBlog />
            <Newsletter />
            <Footer />
        </React.Fragment>
    );
};

export default Main;
