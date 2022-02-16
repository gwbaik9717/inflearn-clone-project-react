import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Search from "../components/Search";
import PopularTags from "../components/PopularTags/PopularTags";
import Courses from "../components/Courses/Courses";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Search />
        <PopularTags />
        <Courses />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
