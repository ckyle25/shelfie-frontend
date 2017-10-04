import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home.js';
import ShelfA from './components/ShelfA.js';
import ShelfB from './components/ShelfB.js';
import ShelfC from './components/ShelfC.js';
import ShelfD from './components/ShelfD.js';
import AddBin from './components/AddBin.js';
import Bin from './components/Bin.js';

export default (
    <Switch>
        <Route component={Home} path='/' exact />
        <Route component={ShelfA} path='/shelfa' exact/>
            <Route component={Bin} path='/shelfa/:id' />
            <Route component={AddBin} path='/shelfaAdd/:id' />
        <Route component={ShelfB} path='/shelfb' exact/>
            <Route component={Bin} path='/shelfb/:id' />
            <Route component={AddBin} path='/shelfbAdd/:id' />
        <Route component={ShelfC} path='/shelfc' exact/>
            <Route component={Bin} path='/shelfc/:id' />
            <Route component={AddBin} path='/shelfcAdd/:id' />
        <Route component={ShelfD} path='/shelfd' exact/>
            <Route component={Bin} path='/shelfd/:id' />
            <Route component={AddBin} path='/shelfdAdd/:id' />
    </Switch>
)
