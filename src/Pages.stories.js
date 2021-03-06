import React from "react";

import MainPage from "./Main.page";

export default {
    title: "Pages",
    component: MainPage,
};

const Template = (args) => <MainPage />;

const MainStory = Template.bind({});

MainStory.args = {};

MainStory.story = {
    name: "Main",
};

export { MainStory };
