import './styles/Reset.css';
import './styles/App.css';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import SessionSelection from './Components/SessionSelection/SessionSelection';
import SeatSelection from './Components/SeatSelection/SeatSelection';
import SuccessPage from './Components/SuccessPage/SuccessPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [movieSession, setMovieSession] = useState('');
  const [clientOrder, setClientOrder] = useState(
    {
      seatsOrder: { ids: [], seatsName: [] },
      name: '',
      cpf: ''
    });
  function resetOrder() {
    setMovieSession('');
    setClientOrder({
      seatsOrder: { ids: [], seatsName: [] },
      name: '',
      cpf: ''
    });
  }
  function chooseMovieSession(movie, day, time) {
    setMovieSession({ movie, day, time })
  }
  function setMyClient(value, type) {
    const newOrder = { ...clientOrder };
    switch (type) {
      case 'name':
        newOrder.name = value;
        break;
      case 'cpf':
        newOrder.cpf = value;
        break;
      default:
    }
    setClientOrder(newOrder);
  }
  function changeSeatsClientOrder(operation, seatId, name) {
    const newOrder = { ...clientOrder };
    const { seatsOrder } = newOrder;
    switch (operation) {
      case 'add':
        seatsOrder.ids.push(seatId);
        seatsOrder.seatsName.push(name);
        break;
      case 'remove':
        seatsOrder.ids = seatsOrder.ids.filter(id => id === seatId ? false : true);
        seatsOrder.seatsName = seatsOrder.seatsName.filter(seatName => seatName === name ? false : true);
        break;
      default:
    }
    setClientOrder(newOrder);
  }
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:idFilme" component={SessionSelection} />
        <Route exact path="/assentos/:idSessao" render={(props) => (
          <SeatSelection {...props} orderFunctions={{ changeSeatsClientOrder, setMyClient, chooseMovieSession }} order={clientOrder} />
        )} />
        <Route exact path="/sucesso" render={(props) => (
          <SuccessPage {...props} order={clientOrder} movieSession={movieSession} resetOrder={resetOrder} />
        )} />
      </Switch>
    </Router>
  );
}

export default App;
