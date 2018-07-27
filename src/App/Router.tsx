import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';


const Router = () => {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/cart' component={CartPage}/>
      </Switch>
    </div>
  )
}

export default Router;
