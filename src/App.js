import "./App.css";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sounds from "./Sounds";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let data = [
  {
    type: "developer",
    needs: ["meditation", "training"],
  },
  {
    type: "client",
    needs: ["new website", "update website", "other"],
  },
];

const listOptions = data.map((item) => {
  <p>hello</p>;
});

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <Cards />
            </Route>
            <Route path="/users">{"users"}</Route>
            <Route path="/blog">
              <Cards />
            </Route>
            <Route path="/">{"Home"}</Route>
          </Switch>
        </div>
      </Router>

      <Sounds />
      <listOptions />

      <Footer />
    </div>
  );
}

export default App;
