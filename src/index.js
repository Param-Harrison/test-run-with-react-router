import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./styles.css";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users({ match }) {
  return <h2>UserID: {match.params.userId}</h2>;
}

const NoMatch = () => {
  return <h2>404 - No matched route</h2>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Index Page</Link>
        <Link to="/about">About</Link>
        <Link to="/users/1">Users</Link>
        <Link to="/old-route">Old route</Link>

        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
          <Route path="/users/:userId" component={Users} />
          <Redirect from="/old-route" to="/about" />
          <Route component={NoMatch} />
        </Switch>
        <a href="/">Index with reload</a>
        <a href="/about">About with reload</a>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
