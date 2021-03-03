import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from "./components/nav";
import MainToggle from "./components/main/mainToggle";
import InfoBlock from './components/main/infoBlock';
import SearchBlock from './components/main/searchBlock';
import SuggestedItems from './components/main/suggestedItems';
import Footer from './components/footer';
import ResultsWrapper from './components/results/resultsWrapper';

function App() {
  return (
      <div>
        <NavBar />
        <BrowserRouter>
          <Route exact path="/">
            <MainToggle />
            <InfoBlock />
            <SearchBlock />

          </Route>
          <Route exact path="/app/:id"   component={ResultsWrapper}  />


        </BrowserRouter>
        <Footer />
      </div>

  );
}

export default App;
