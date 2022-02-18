import * as React from "react";
import Home from "./routes/Home";
import Roadmap from "./routes/Roadmap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*import { Reset } from "styled-reset";*/
import GlobalStyle from "./styles/GlobalStyle";
import "./styles/Slider.css";
import "./styles/Swiper.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/roadmap">
            <Roadmap />
          </Route>

          <Route path="/">
            <Home />
          </Route>

          {/*<Route path="/signup">
            <Signup />
          </Route>*/}
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
