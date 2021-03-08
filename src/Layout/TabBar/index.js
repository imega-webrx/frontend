import React from "react";
import tw from "twin.macro";

const TabBar = ({ children }) => (
    <Container>
        <Border>
            <Panel ariaLabel="Tabs">{children}</Panel>
        </Border>
    </Container>
);

const Container = tw("div")`hidden sm:block`;
const Border = tw("div")`border-b border-gray-200`;
const Panel = tw("nav")`-mb-px flex space-x-8`;

export default TabBar;
