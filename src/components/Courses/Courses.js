import Header from "../Courses/Header";
import CoursesLists from "../Courses/CoursesLists";
import styled from "styled-components";

const StyledCourses = styled.section`
  padding: 24px 0;

  .container {
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    .container{
      padding: 0 1rem;

    }
      
    
    }
  }
`;

const Courses = ({ id, title }) => {
  return (
    <StyledCourses id="similar" className="courses slider">
      <div className="container">
        <div className="main-courses-list">
          <Header id={id} title={title} />
          <CoursesLists />
        </div>
      </div>
    </StyledCourses>
  );
};

export default Courses;
