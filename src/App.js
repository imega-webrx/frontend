import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apolloConfig";

import Main from "./Main.page";
import SearchResult from "./SearchResult.page";
import Header from "./Layout/Header";
import Product from "./Product.page";

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
                        <Route
                            path="/product/:id"
                            component={Product}
                            exact
                        />
                    </Switch>
                </React.Fragment>
            </HashRouter>
        </ApolloProvider>
    );
};

export default App;
