import React from "react";
import "tailwindcss/tailwind.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main.page";
import SearchResult from "./SearchReult.page";
import Header from "./Layout/Header";

const App = () => {


    return (
        <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Main} exact/>
                <Route path="/searchResult" component={SearchResult} exact/>
            </Switch>
        </div>
        </BrowserRouter>
    );
};

export default App;
