import React from "react";

import Normalize from "../src/Normalize";

export const decorators = [
    (Story) => (
        <React.Fragment>
            <Normalize />
            <Story />
        </React.Fragment>
    ),
];

export const parameters = { layout: "fullscreen" };
