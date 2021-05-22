import React, { useState } from 'react';
import Login from './components/sessions/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import fire from './firebase.js';
const signOut = () => {
  fire.auth().signOut()
};
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    fire.auth().onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  
  console.log('logged in?', isLoggedIn);
  return (
    <div className="App">
      <Router>
        
        {!isLoggedIn
          ? (
            <>
              <Switch>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </>
          ) 
          : (
            <>
              <span onClick={signOut}>
              <a href="">Sign out</a>
              </span>
            </>
          )}
      </Router>
    </div>
  );
}
export default App;