import Header from "../Header/Header";
import RoadmapApply from "../RoadmapApply/RoadmapApply";
import Footer from "../Footer/Footer";
import { useParams } from "react-router";

const CourseSearch = () => {
  const { course } = useParams();

  console.log(course);

  return (
    <>
      <Header />

      <RoadmapApply />
      <Footer />
    </>
  );
};

export default CourseSearch;
