import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; //Link
import SplashScreen from './Login/SplashScreen.js'
import VotingPage from './Voting/VotingPage.js'
import Results from './server/Results.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/vote'>
          <VotingPage />
        </Route>
        <Route path='/admin_secret'>
          <Results />
        </Route>
        <Route path='/'>
          <SplashScreen />
        </Route>
        </Switch>
    </Router>


    // <div className="App">
    //   <header className="App-header">
    //   </header>
    //   <SplashScreen />
    // </div>
  );
}

export default App;
