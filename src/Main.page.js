import React from "react";
import tw from "twin.macro";

const Nav = tw("nav")`bg-gray-800`;
const Container = tw("div")`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`;
const SubContainer = tw("div")`flex items-center justify-between h-16`;
const Bar = tw("div")`flex items-center`;

const Logo = tw("div")`flex-shrink-0 flex items-center`;
const Panel = tw("div")`hidden sm:block sm:ml-6`;
const Menu = tw("div")`flex space-x-4`;
const MenuItem = tw(
    "a"
)`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`;

const MenuItemActive = tw(
    "a"
)`bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium`;

const Main = () => (
    <Nav>
        <Container>
            <SubContainer>
                <Bar>
                    <Logo>
                        <img
                            className="block lg:hidden h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow"
                        />
                        <img
                            className="hidden lg:block h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                            alt="Workflow"
                        />
                    </Logo>
                    <Panel>
                        <Menu className="flex space-x-4">
                            <MenuItemActive href="#">Dashboard</MenuItemActive>
                            <MenuItem href="#">Team</MenuItem>
                            <MenuItem href="#">Projects</MenuItem>
                            <MenuItem href="#">Calendar</MenuItem>
                        </Menu>
                    </Panel>
                </Bar>
            </SubContainer>
        </Container>
    </Nav>
);

export default Main;
