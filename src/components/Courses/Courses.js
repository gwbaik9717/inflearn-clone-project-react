import Header from "../Courses/Header";
import CoursesLists from "../Courses/CoursesLists";
import "../../styles/Courses.css";

const Courses = ({ id, title }) => {
  return (
    <section id="similar" className="courses slider">
      <div className="container">
        <div className="main-courses-list">
          <Header id={id} title={title} />
          <CoursesLists />
        </div>
      </div>
    </section>
  );
};

export default Courses;
