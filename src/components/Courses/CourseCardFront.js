import CourseTag from "./CourseTag";
import styled from "styled-components";
import CourseStar from "../../img/CourseStar";

const CourseCardFront = ({ title, tags, author, img, reviewCount, price }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<CourseStar key={i} />);
    }

    return stars;
  };

  return (
    <StyledCardFront href="#" className="course-card--front">
      <div className="card-image">
        <img src={img} alt={title} />
      </div>

      <div className="card-detail">
        <div className="course-title">{title}</div>
        <div className="course-instructor">{author}</div>
        <div className="course-rating">
          <StyledRatingStars className="rating-stars">
            {renderStars()}
          </StyledRatingStars>
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

  @media (max-width: 768px) {
    .course-title {
      font-weight: 500;
      line-height: 1.3rem;
      height: 2.6rem;
      font-size: 0.875rem;
    }

    .course-instructor {
      font-size: 0.825rem;
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
      font-size: 0.9rem;
    }

    .course-tags {
      display: flex;
      padding-top: 0.5rem;
      box-sizing: content-box;
    }
  }
`;

const StyledRatingStars = styled.div`
  width: 4.5rem;
  display: inline-flex;
  justify-content: flex-start;

  svg {
    color: #fdcc11;
    width: 0.9rem;
    height: 0.9rem;
  }

  @media (max-width: 768px) {
    width: 3.6rem;

    svg {
      width: 0.72rem;
    }
  }
`;

export default CourseCardFront;
