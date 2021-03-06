import React from "react";
import { Global, css } from "@emotion/core";
import emotionReset from "emotion-reset";

const Normalize = () => (
    <Global
        styles={css`
            ${emotionReset}
        `}
    />
);

export default Normalize;
