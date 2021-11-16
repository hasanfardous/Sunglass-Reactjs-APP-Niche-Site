import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Common/Header/Header';
import PrivateRoute from './Components/Common/PrivateRoute/PrivateRoute';
import MyOrders from './Components/Admin/MyOrders/MyOrders';
import Footer from './Components/Common/Footer/Footer';
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Products from "./Components/Products/Products";
import Purchase from "./Components/Products/Product/Purchase";
import Pay from "./Components/Admin/Pay/Pay";
import AddReview from "./Components/Admin/AddReview/AddReview";


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
            <Route path="/explore">
              <Products></Products>
            </Route>
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/product/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <AddReview></AddReview>
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