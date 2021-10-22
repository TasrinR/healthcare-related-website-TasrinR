import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import Services from './Components/Pages/Services/Services';
import Booking from './Components/Pages/Booking/Booking';
import Login from './Components/Pages/Login/Login/Login';
import Header from './Components/Pages/Shared/Header/Header';
import Specific from './Components/Pages/Services/Specific/Specific';
import Register from './Components/Pages/Login/Register/Register';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Components/Pages/Shared/Footer/Footer';
import NotFound from './Components/Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/Specific/:serviceId">
              <Specific></Specific>
            </Route>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
              <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
