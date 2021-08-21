import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads>>>
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>', authUser);
      if(authUser){
        //the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
             <div className="App">
               <Login />
             </div>
          </Route>
          <Route path="/checkout">
            <div className="App">
              <Header />
              <Checkout />
            </div>
          </Route>
            <Route path="/">
            <div className="App">
              <Header />
              <Home />
            </div>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
