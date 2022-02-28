import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";

const CoursesHeaderWithID = ({ id }) => {
  return (
    <div className="courses-header">
      <a href="#">
        <h2 className="title">
          내가 학습한
          <span className="text-colored">{id}</span>
          분야 인기 강의
          <span className="icon">
            <FontAwesomeIcon icon={All.faChevronRight} />
          </span>
        </h2>
      </a>
    </div>
  );
};

export default CoursesHeaderWithID;
