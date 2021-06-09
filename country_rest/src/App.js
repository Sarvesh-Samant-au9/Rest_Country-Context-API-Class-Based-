import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Countries from "./Components/Country/Countries";
import DetailedCountry from "./Components/Country/DetailedCountry";
import Navbar from "./Components/Layout/Navbar";

import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Countries} />
            <Route path="/country/:id" component={DetailedCountry} exact />
            <Route path="/about" component={About} exact />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
