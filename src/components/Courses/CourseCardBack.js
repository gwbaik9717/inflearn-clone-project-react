import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledCardBack = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 13px;
  width: 100%;
  height: 100%;
  padding: 0.75rem;

  .course-title {
    font-size: 0.95rem;
    line-height: 1.25;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .course-detail {
    width: 100%;
    color: #c5ebf8;
  }

  .course-detail > div {
    margin-bottom: 0.07rem;
  }

  span > svg {
    margin-right: 0.3rem;
  }

  .btns {
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: 0.15rem;
    padding-bottom: 0.5rem;
    text-align: center;
    font-size: 17px;
    color: #fff;
  }

  .btns > div {
    padding: 0.15rem;
    box-sizing: content-box;
  }
`;

const CourseCardBack = ({ title, level, fields, skills }) => {
  return (
    <StyledCardBack className="course-card--back">
      <a href="#">
        <div className="course-title">{title}</div>
        <div className="course-detail">
          <div className="course-detail__level">
            <span>
              <svg
                width="16"
                aria-hidden="true"
                data-prefix="fal"
                data-icon="signal-alt"
                className="svg-inline--fa fa-signal-alt fa-w-20"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M576 32v448h-32V32h32M416 160v320h-32V160h32M256 288v192h-32V288h32M96 416v64H64v-64h32M576 0h-32c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM416 128h-32c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zM256 256h-32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32zM96 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>
              {level}
            </span>
          </div>
          <div className="course-detail__fields">
            <span>
              <svg
                width="16"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="cubes"
                className="svg-inline--fa fa-cubes fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
                ></path>
              </svg>
              {fields}
            </span>
          </div>
          <div className="course-detail__skills">
            <span>
              <svg
                width="16"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="cubes"
                className="svg-inline--fa fa-cubes fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
                ></path>
              </svg>
              {skills}
            </span>
          </div>
        </div>
      </a>

      <div className="btns">
        <div>
          <FontAwesomeIcon icon={All.faCartShopping} />
        </div>
        <div>
          <FontAwesomeIcon icon={All.faHeart} />
        </div>
        <div>
          <FontAwesomeIcon icon={All.faPlus} />
        </div>
      </div>
    </StyledCardBack>
  );
};

export default CourseCardBack;
