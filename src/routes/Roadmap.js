import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RoadmapHero from "../components/RoadmapHero/RoadmapHero";
import RoadmapMain from "../components/RoadmapMain/RoadmapMain";

const Roadmap = () => {
  return (
    <div>
      <Header />

      <main>
        <section className="roadmap-list">
          <RoadmapHero />
          <RoadmapMain />
        </section>
      </main>

      {/*<RoadmapApply />*/}

      <Footer />
    </div>
  );
};

export default Roadmap;
