import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Contact from './pages/Contact/Contact';
import Destinations from './pages/Destinations/Destinations';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ManageUsers from './pages/ManageUsers/ManageUsers';
import MyBooking from './pages/MyBooking/MyBooking';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import DestinationDetails from './pages/ShowDestinations/DestinationDetails/DestinationDetails';
import ShowDestinations from './pages/ShowDestinations/ShowDestinations';
import WatchBooking from './pages/WatchBookings/WatchBooking';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/upcomingTours">
              <ShowDestinations></ShowDestinations>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/addTourPlace">
              <Destinations></Destinations>
            </PrivateRoute>
            <PrivateRoute path="/showResults">
              <ShowDestinations></ShowDestinations>
            </PrivateRoute>
            <PrivateRoute path="/pickedDestination/:id">
              <DestinationDetails></DestinationDetails>
            </PrivateRoute>
            <Route path="/myBooking/:id">
              <MyBooking></MyBooking>
            </Route>
            <Route path="/watchBookings">
              <WatchBooking></WatchBooking>
            </Route>
            <PrivateRoute path="/manageUsers">
              <ManageUsers></ManageUsers>
            </PrivateRoute>
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
