import React from "react";

import MainPage from "./Main.page";
import ShowWords from "./Layout/WordBack/newWord";

export default {
    title: "Pages",
    component: MainPage,
};

const Template = (args) => <MainPage />;
const SubTemplate = (args) => <ShowWords/>;
const MainStory = Template.bind({});
const SubStory = SubTemplate.bind({});

MainStory.args = {};
SubStory.args = {};

MainStory.story = {
    name: "Main",
};
SubStory.story = {
    name: "Sub",
};

export { MainStory, SubStory };
