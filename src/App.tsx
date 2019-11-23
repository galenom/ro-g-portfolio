import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css';
import { MainHeader } from './layout/main-header';
import { Work } from './work';
import { About } from './about';
import { Contact } from './contact';

const App: React.FC = () => {
  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route path='/' exact>
          <About />
        </Route>

        <Route path='/work'>
          <Work />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
