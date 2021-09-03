import './Reset.css';
import './App.css';
import Header from './Header';
import Home from './Home';
import SessionSelection from './SessionSelection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/filme/:movieId" exact component={SessionSelection}/>
      </Switch>
    </Router>


  );
}

export default App;
