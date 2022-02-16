import CourseTag from "./CourseTag";
import CourseRatingStars from "./CoursesRatingStars";

const CourseCardFront = ({ title, tags, author, img, reviewCount, price }) => {
  return (
    <a href="#" className="course-card--front">
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
    </a>
  );
};

export default CourseCardFront;
