import CourseTag from "./CourseTag";
import CourseRatingStars from "./CoursesRatingStars";
import styled from "styled-components";

const StyledCardFront = styled.a`
  .card-detail {
    padding: 0.5rem 0;
  }

  .course-title {
    font-weight: 700;
    line-height: 1.5em;
    height: 3rem;
    overflow: hidden;
  }

  .course-instructor {
    color: #7d7d7d;
    font-size: 0.9rem;
  }

  .course-rating {
    position: relative;
  }

  .review-count {
    font-size: 0.5rem;
    position: absolute;
    bottom: 0.3rem;
    color: #4a4a4a;
  }

  .review-count {
    font-size: 0.5rem;
    position: absolute;
    bottom: 0.3rem;
    color: #4a4a4a;
  }

  .course-price {
    color: #175cbe;
    font-weight: 700;
  }

  .course-tags {
    display: flex;
    padding-top: 0.5rem;
    box-sizing: content-box;
  }
`;

const CourseCardFront = ({ title, tags, author, img, reviewCount, price }) => {
  return (
    <StyledCardFront href="#" className="course-card--front">
      <div className="card-image">
        <img src={img} alt={title} />
      </div>

      <div className="card-detail">
        <div className="course-title">{title}</div>
        <div className="course-instructor">{author}</div>
        <div className="course-rating">
          <CourseRatingStars />
          <span className="review-count">({reviewCount})</span>
        </div>
        <div className="course-price">
          <span>{price}</span>
        </div>

        <div className="course-tags tags">
          {tags.map((tag) => (
            <CourseTag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </StyledCardFront>
  );
};

export default CourseCardFront;
