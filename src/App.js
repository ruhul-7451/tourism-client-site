import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Booking from './pages/Booking/Booking';
import Destinations from './pages/Destinations/Destinations';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MyBooking from './pages/MyBooking/MyBooking';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import DestinationDetails from './pages/ShowDestinations/DestinationDetails/DestinationDetails';
import ShowDestinations from './pages/ShowDestinations/ShowDestinations';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/booking">
              <Booking></Booking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addTourPlace">
              <Destinations></Destinations>
            </Route>
            <Route path="/showDestination">
              <ShowDestinations></ShowDestinations>
            </Route>
            <Route path="/pickedDestination/:id">
              <DestinationDetails></DestinationDetails>
            </Route>
            <Route path="/myBooking/:id">
              <MyBooking></MyBooking>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
