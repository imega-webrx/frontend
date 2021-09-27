import React from "react";

import Normalize from "../src/Normalize";
//import "../src/styles.css";

export const decorators = [
    (Story) => (
        <React.Fragment>
            <Normalize />
            <Story />
        </React.Fragment>
    ),
];

export const parameters = { layout: "fullscreen" };
