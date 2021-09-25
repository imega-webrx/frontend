import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
//import "tailwindcss/tailwind.css";
import Main from "./Main.page";
import SearchResult from "./SearchReult.page";
import Header from "./Layout/Header";

const App = () => {
    return (
        <HashRouter>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/" component={Main} exact />
                    <Route
                        path="/searchResult"
                        component={SearchResult}
                        exact
                    />
                </Switch>
            </React.Fragment>
        </HashRouter>
    );
};

export default App;
