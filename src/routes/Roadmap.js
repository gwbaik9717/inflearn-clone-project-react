import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RoadmapHero from "../components/RoadmapHero/RoadmapHero";
import RoadmapMain from "../components/RoadmapMain/RoadmapMain";
import RoadmapApply from "../components/RoadmapApply/RoadmapApply";
import { useSelector } from "react-redux";

const Roadmap = () => {
  const { init } = useSelector((state) => state.toggleInit);

  return (
    <>
      {init ? (
        <div>
          <Header />

          <main>
            <section className="roadmap-list">
              <RoadmapHero />
              <RoadmapMain />
            </section>
          </main>

          <RoadmapApply />
          <Footer />
        </div>
      ) : (
        <span>loading...</span>
      )}
    </>
  );
};

export default Roadmap;
