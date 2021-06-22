import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Addmarks from '../src/components/addmarks'
import Viewmarks from '../src/components/viewmarks'
import Updatemarks from '../src/components/updatemarks'
import Deltemarks from '../src/components/deletemarks'



function App() {
  return (
  
    <Router>
      <Switch>
        <Route path="/" exact component={Addmarks}></Route>
        <Route path="/viewmarks" exact component={Viewmarks}></Route>
        <Route path="/updatemarks" exact component={Updatemarks}></Route>
        <Route path="/deletemarks" exact component={Deltemarks}></Route>
      </Switch>
    </Router>

  );
}

export default App;
