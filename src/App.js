import Home from "./routes/Home";
/*import { Roadmap } from "../routes/Roadmap";
import { Signup } from "../routes/Signup";*/
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>

          {/*<Route path="/roadmap">
            <Roadmap />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
