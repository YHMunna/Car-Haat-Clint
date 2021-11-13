import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Purchase from "./Components/Purchase/Purchase";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ExploreShop from "./Components/ExploreShop/ExploreShop";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Payment from "./Components/Dashboard/Payment/Payment";
import Review from "./Components/Dashboard/Review/Review";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/shop">
            <ExploreShop></ExploreShop>
          </Route>
          <Route path="/pay">
            <Payment></Payment>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
