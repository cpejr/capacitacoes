import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Counter from './pages/Counter';
import Fetching from './pages/FetchingData';
import SimpleCounter from './pages/SimpleCounter';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/counter" exact component={Counter} />
                <Route path="/fetch" exact component={Fetching} />
                <Route path="/simplecounter" exact component={SimpleCounter} />
            </Switch>
        </BrowserRouter>
    );
}