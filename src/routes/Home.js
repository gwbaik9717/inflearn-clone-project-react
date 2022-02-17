import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Search from "../components/Search";
import PopularTags from "../components/PopularTags/PopularTags";
import Courses from "../components/Courses/Courses";
import Category from "../components/Category/Category";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Search />
        <PopularTags />
        <Courses title="나와 비슷한 사람들이 수강한 강의" />
        <Courses id="JavaScript" title="courses" />
        <Courses id="알고리즘" title="courses" />
        <Category title="더 둘러보기" />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
