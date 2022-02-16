import Header from "../Courses/Header";
import CoursesLists from "../Courses/CoursesLists";
import "../../styles/Slider.css";
import "../../styles/Courses.css";

const Courses = () => {
  return (
    <section id="similar" className="courses slider">
      <div className="container">
        <div className="main-courses-list">
          <Header />
          <CoursesLists />
        </div>
      </div>
    </section>
  );
};

export default Courses;
