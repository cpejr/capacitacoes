import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TesteDeAura from './Pages/TesteDeAura'
import Pronto from './Pronto'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/testeDeAura"  component={TesteDeAura} />
        <Route path="/pronto"  component={Pronto} />
      </Switch>
    </BrowserRouter>
  );
}