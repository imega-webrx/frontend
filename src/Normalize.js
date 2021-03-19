import React from "react";
import { Global, css } from "@emotion/core";
import emotionReset from "emotion-reset";

const Normalize = () => (
    <Global
        styles={css`
            ${emotionReset}
            html {
                font-family: Inter var, ui-sans-serif, system-ui, -apple-system,
                    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
                    Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
                    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                line-height: 1.5;
            }
            body {
                background-color: rgba(243, 244, 246, 1);
            }
            div,
            a,
            input,
            ::before,
            ::after {
                box-sizing: border-box;
                border-width: 0;
                border-style: solid;
                border-color: #e5e7eb;
            }
            a {
                color: inherit;
                text-decoration: inherit;
            }
            .rounded {
                border-radius: 0.25rem;
            }
            .rounded-md {
                border-radius: 0.375rem;
            }
            .pl-2 {
                padding-left: 0.5rem;
            }
            .border-indigo-500 {
                --tw-border-opacity: 1;
                border-color: rgba(99, 102, 241, var(--tw-border-opacity));
            }
            .ring-indigo-500:focus {
                --tw-ring-opacity: 1;
                --tw-ring-color: rgba(99, 102, 241, var(--tw-ring-opacity));
            }
            .focus:border-indigo-500:focus {
                --tw-border-opacity: 1;
                border-color: rgba(99, 102, 241, var(--tw-border-opacity));
            }
        `}
    />
);

export default Normalize;
