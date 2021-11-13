import React from "react";
import tw from "twin.macro";

const TabBar = () => {
    return (
        <React.Fragment>
            <Mobile>
                <Label htmlFor="tabs">Select a tab</Label>
                <Select id="tabs" name="tabs" className="">
                    <option>Предложения</option>
                    <option>Характеристики</option>
                    <option selected="">Отзывы</option>
                    <option>Дополнительно</option>
                </Select>
            </Mobile>
            <Laptop>
                <NavWrapper>
                    <Nav aria-label="Tabs">
                        <TabBtnActive
                            name="offers"
                            value={true}
                            onClick={() => console.log("offer")}
                        >
                            Предложения
                        </TabBtnActive>
                        <TabBtn>Характеристики</TabBtn>
                        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
                        <TabBtn>Отзывы</TabBtn>
                        <TabBtn>Дополнительно</TabBtn>
                    </Nav>
                </NavWrapper>
            </Laptop>
        </React.Fragment>
    );
};

const Mobile = tw("div")`
    sm:hidden
    my-4
`;
const Label = tw("label")`
    sr-only
`;
const Select = tw("select")`
    block
    w-full
    pl-3 pr-10 py-2
    text-base
    sm:text-sm
    border-gray-300
    focus:border-indigo-500
    focus:outline-none focus:ring-indigo-500
    rounded-md
`;

const Laptop = tw("div")`
    hidden sm:block
    my-4
`;
const NavWrapper = tw("div")`
    border-b border-gray-200
`;
const Nav = tw("nav")`
    -mb-px flex space-x-8
`;
const TabBtn = tw("button")`
    bg-transparent
    outline-none
    border-none
    border-transparent
    text-sm
    font-medium
    text-gray-500
    hover:text-gray-700 hover:border-gray-300
    whitespace-nowrap
    py-4 px-1
    border-b-2
    cursor-pointer
`;
const TabBtnActive = tw("button")`
    bg-transparent
    outline-none
    border-0
    border-indigo-500
    border-b-2
    border-solid
    text-sm
    font-medium
    text-indigo-600
    whitespace-nowrap
    py-4 px-1
    cursor-pointer
`;

export default TabBar;
