import React from "react";
import tw from "twin.macro";

const NavBar = (props) => (
    <nav>
        <Layout>
            <Border>
                <Container>{props.children}</Container>
            </Border>
        </Layout>
    </nav>
);

const Layout = tw("div")`max-w-7xl mx-auto sm:px-6 lg:px-8`;
const Border = tw("div")`border-b border-gray-700`;
const Container = tw(
    "div"
)`flex items-center justify-between h-16 px-4 sm:px-0`;

export default NavBar;
