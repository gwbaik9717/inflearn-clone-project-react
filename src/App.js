import * as React from "react";
import Home from "./routes/Home";
import Roadmap from "./routes/Roadmap";
import Signup from "./routes/Signup";
import Mentor from "./routes/Mentor";
import Mentors from "./routes/Mentors";

import { BrowserRouter, Route, Routes } from "react-router-dom";
/*import { Reset } from "styled-reset";*/
import GlobalStyle from "./styles/GlobalStyle";
import "./styles/Slider.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/mentors/*" element={<Mentors />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
