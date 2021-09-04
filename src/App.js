import './styles/Reset.css';
import './styles/App.css';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import SessionSelection from './Components/SessionSelection/SessionSelection';
import SeatSelection from './Components/SeatSelection/SeatSelection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/filme/:idFilme" exact component={SessionSelection}/>
        <Route path="/assentos/:idSessao" exact component={SeatSelection}/>
      </Switch>
    </Router>


  );
}

export default App;
