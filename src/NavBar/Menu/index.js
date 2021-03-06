import React from "react";
import tw from "twin.macro";

import { Default, Active } from "./Item";

const Menu = tw("div")`flex space-x-4`;

const Main = () => (
    <Menu>
        <Active href="https://webrx.ru/">Dashboard</Active>
        <Default href="#">Team</Default>
        <Default href="#">Projects</Default>
        <Default href="#">Calendar</Default>
    </Menu>
);

export default Main;
