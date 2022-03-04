import * as React from "react";
import Home from "./routes/Home";
import Roadmap from "./routes/Roadmap";
import Signup from "./routes/Signup";
import Mentor from "./routes/Mentor";
import Mentors from "./routes/Mentors";
import CourseSearch from "./components/CourseSearch/CourseSearch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import "./styles/Slider.css";
import MobileBottomNavigation from "./components/MobileBottomNavigation/MobileBottomNavigation";
import MobileRightAside from "./components/MobileRightAside/MobileRightAside";
import MobileLeftAside from "./components/MobileLeftAside/MobileLeftAside";

function App() {
  return (
    <>
      <MobileBottomNavigation />
      <MobileLeftAside />
      <MobileRightAside />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses/:course" element={<CourseSearch />} />
          <Route path="/mentors/*" element={<Mentors />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
