import React from "react";
import tw from "twin.macro";
import { RightMenu } from "./RightMenu";
import MobileMenu from "./MobileMenu";

const NavBar = (props) => (
    <nav>
        <Layout>
            <Border>
                <Container>{props.children}</Container>
                <RightMenu />
                <MobileMenu />
            </Border>
        </Layout>
    </nav>
);

const Layout = tw("div")`max-w-7xl mx-auto sm:px-6 lg:px-8`;
const Border = tw("div")`flex justify-between h-16`;
const Container = tw("div")`
    flex
`;

export default NavBar;
