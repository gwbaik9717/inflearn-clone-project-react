import CourseCardFront from "./CourseCardFront";
import CourseCardBack from "./CourseCardBack";
import styled from "styled-components";

const StyledCard = styled.div`
  height: 100%;

  .course-card--front:hover + .course-card--back {
    pointer-events: none;
    display: block;
  }
`;

const CourseCard = ({
  title,
  tags,
  author,
  img,
  reviewCount,
  price,
  level,
  fields,
  skills,
}) => {
  return (
    <StyledCard className="card course-card">
      <CourseCardFront
        title={title}
        tags={tags}
        author={author}
        img={img}
        reviewCount={reviewCount}
        price={price}
      />
      <CourseCardBack
        title={title}
        level={level}
        fields={fields}
        skills={skills}
      />
    </StyledCard>
  );
};

export default CourseCard;
