import * as React from "react";
import Home from "./routes/Home";
import Roadmap from "./routes/Roadmap";
import Signup from "./routes/Signup";
import Mentor from "./routes/Mentor";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*import { Reset } from "styled-reset";*/
import GlobalStyle from "./styles/GlobalStyle";
import "./styles/Slider.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/roadmap">
            <Roadmap />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/mentor">
            <Mentor />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
