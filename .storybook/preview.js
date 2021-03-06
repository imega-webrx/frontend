import React from "react";

import Normalize from "../src/Normalize";

export const decorators = [
    (Story) => (
        <React.Fragment>
            <div style={{ margin: "0" }}>
                <Normalize />
                <Story />
            </div>
        </React.Fragment>
    ),
];

export const parameters = { layout: "fullscreen" };
