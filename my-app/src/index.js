import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar"
import MyItem from "./components/MyItem"
import FormRegister from "./components/FormRegister"

ReactDOM.render(
  <React.StrictMode>
              <Router> 
          <MyNavbar />
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/myitem" component={MyItem}/> 
            <Route path="/formregister" component={FormRegister}/> 
            

          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
