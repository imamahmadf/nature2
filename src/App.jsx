import "./App.css";
import Home from "./pages/home";
import Login from "./pages/Login";
import Signin from "./pages/signin";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Signin} path="/signin" />

        <Route component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
