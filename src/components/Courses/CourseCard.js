import CourseCardFront from "./CourseCardFront";
import CourseCardBack from "./CourseCardBack";
import styled from "styled-components";

const CourseCard = ({
  id,
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
        id={id}
        title={title}
        level={level}
        fields={fields}
        skills={skills}
      />
    </StyledCard>
  );
};

const StyledCard = styled.div`
  height: 100%;

  &:hover .course-card--back {
    display: block;
    cursor: pointer;
  }
`;

export default CourseCard;
