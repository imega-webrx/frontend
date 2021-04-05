const fs = require("fs");

import React from "react";
import ReactDOM from "react-dom/server";
import { extractCritical } from "emotion-server";
import { renderToStringWithData } from "@apollo/client/react/ssr";

import MainPage from "./Main.page";
import Normalize from "./Normalize";

const r = renderToStringWithData(<MainPage />).then((content) => {
    const { ids, css, html } = extractCritical(content);

    return ReactDOM.renderToString(
        <React.Fragment>
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1"
                    />
                    <Normalize />
                    <style
                        data-emotion-css={ids.join(" ")}
                        dangerouslySetInnerHTML={{ __html: css }}
                    />
                    <title>Title</title>
                </head>
                <body>
                    <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
                    <script src="/client.js" />
                </body>
            </html>
        </React.Fragment>
    );
});

r.then((res) => {
    fs.writeFile("./build/index.htm", `<!DOCTYPE html>${res}`, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("The file was saved!");
    });
}).catch((err) => console.error(err));
