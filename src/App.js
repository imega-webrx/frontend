import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apolloConfig";

import Main from "./Main.page";
import SearchResult from "./SearchReult.page";
import Header from "./Layout/Header";

const App = () => {
    return (
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    );
};

export default App;
