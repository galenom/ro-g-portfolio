import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css';
import { MainHeader } from './layout/main-header';


const App: React.FC = () => {
  return (
    <Router>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/'>
            <h1>WORK</h1>
          </Route>

          <Route path='/about'>
            <h1>ABOUT</h1>
          </Route>

          <Route path='/contact'>
            <h1>CONTACT</h1>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
