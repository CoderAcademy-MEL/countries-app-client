import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Countries from './Countries'
import Country from './Country'
import CreateCountries from './CreateCountries'
import NoMatch from './NoMatch'

const App = () => {
  return (
    <Switch>
      <Route exact path={["/countries", "/"]} component={Countries} />
      <Route exact path="/countries/create" component={CreateCountries} />
      <Route exact path="/countries/:id" component={Country} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default App;

// "/countries"
// "/countries/:id"
// "/countries/create"
// NoMatch