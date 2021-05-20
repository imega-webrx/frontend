import React from "react";
import tw, { styled } from "twin.macro";

const NavBarSelect = () => (
    <SelectLayout>
        <Label htmlFor="tabs">Select a tab</Label>
        <Select id="tabs" name="tabs" defaultValue={'Home'}>
            <option value="Home">My Account</option>
            <option value="Company">Company</option>
            <option value="Members">Team Members</option>
            <option value="Billing">Billing</option>
        </Select>
    </SelectLayout>
);

const SelectLayout = tw("div")`sm:hidden`;
const Label = tw("label")`sr-only`;
const Select = tw("select")`
    block
    w-full
    focus:ring-indigo-500
    focus:border-indigo-500
    border-gray-300
    rounded-md
    pl-3
    pr-10
    py-2
    bg-white
    text-base
`;

const NavBar = () => (
    <NavBarLayout>
        <Nav aria-label="Tabs" className="group">
            <TabLinkLeft href="#" isActive aria-current="page">
                <span>My Account</span>
                <BottomLine aria-hidden="true" isActive />
            </TabLinkLeft>
            <TabLink href="#" aria-current="false">
                <span>Company</span>
                <BottomLine aria-hidden="true" />
            </TabLink>
            <TabLink href="#" aria-current="false">
                <span>Team Members</span>
                <BottomLine aria-hidden="true" />
            </TabLink>
            <TabLinkRight href="#" aria-current="false">
                <span>Billing</span>
                <BottomLine aria-hidden="true" />
            </TabLinkRight>
        </Nav>
    </NavBarLayout>
);

const NavBarLayout = tw("div")`hidden sm:block`;
const Nav = tw("nav")`
    relative
    z-0
    rounded-lg
    shadow
    flex
    divide-x
    divide-gray-200
`;

const Link = tw("a")`
    text-gray-500
    relative
    min-w-0
    flex-1
    overflow-hidden
    bg-white
    py-4
    px-4
    text-sm
    font-medium
    text-center
    hover:bg-gray-50
    focus:z-10
`;

const TabLink = styled(Link)`
    ${({ isActive }) => isActive && tw`text-gray-900`}
`;
const TabLinkLeft = tw(TabLink)`rounded-l-lg`;
const TabLinkRight = tw(TabLink)`rounded-r-lg`;

const Line = tw("span")`bg-transparent absolute inset-x-0 bottom-0 h-0.5`;

const BottomLine = styled(Line)`
    ${({ isActive }) => isActive && tw`bg-indigo-500`}
`;

const NavigationBar = () => {
    return (
        <NavigationBarLayout>
            <NavigationBarContainer>
                <NavBarSelect />
                <NavBar />
            </NavigationBarContainer>
        </NavigationBarLayout>
    );
};

const NavigationBarLayout = tw("div")`bg-yellow-300 px-4 sm:px-6 lg:px-8 py-2`;
const NavigationBarContainer = tw("div")`max-w-3xl mx-auto`;

export { NavigationBar };
