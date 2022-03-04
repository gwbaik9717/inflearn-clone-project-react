import CoursesLists from "../Courses/CoursesLists";
import styled from "styled-components";
import CoursesHeader from "./CoursesHeader";
import CoursesHeaderWithID from "./CoursesHeaderWithID";

const StyledCourses = styled.section`
  padding: 24px 0;
  overflow: hidden;

  .container {
    padding: 0 10px;
  }

  .courses-header .title {
    color: #1e1e1e;
    font-size: 1.5rem;
    line-height: 1.5;
    display: flex;
    align-items: center;
  }

  .text-colored {
    padding: 0 5px;
    color: #1dc078 !important;
  }

  .courses-detail {
    margin-top: 4px;
    font-weight: 400;
    color: #757575;
    font-size: 0.9375rem;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
  }
`;

const Courses = ({ id, title, desc }) => {
  return (
    <StyledCourses id="similar" className="courses slider">
      <div className="container">
        <div className="main-courses-list">
          <div className="header">
            {id ? (
              <>
                <CoursesHeaderWithID id={id} />
              </>
            ) : (
              <CoursesHeader title={title} />
            )}
            {desc && (
              <div className="courses-detail">
                <p>{desc}</p>
              </div>
            )}
          </div>
          <CoursesLists />
        </div>
      </div>
    </StyledCourses>
  );
};

export default Courses;
