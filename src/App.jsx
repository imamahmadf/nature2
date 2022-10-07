import "./App.css";
import Home from "./pages/home";
import Login from "./pages/Login";
import Signin from "./pages/signin";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./pages/profile";
import Post from "./pages/Post";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Signin} path="/signin" />
        <Route component={Profile} path="/profile" />
        <Route component={Post} path="/post" />

        <Route component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
