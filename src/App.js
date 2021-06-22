import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Addmarks from './addmarks'
import Viewmarks from './viewmarks'
import Updatemarks from './updatemarks'
import Deltemarks from './deletemarks'



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
