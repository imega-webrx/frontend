import React from "react";
import tw from "twin.macro";

import { Header } from "./Header";
import { NavigationBar } from "./NavigationBar";
import SearchInput from "../../Search/Input";
import { Footer } from "./Footer";

const SearchSection = () => {
    return (
        <SectionLayout>
            <Header />
            <NavigationBar />
            <SearchInput />
            <Footer />
        </SectionLayout>
    );
};

const SectionLayout = tw("section")`bg-yellow-300`;

export { SearchSection };
