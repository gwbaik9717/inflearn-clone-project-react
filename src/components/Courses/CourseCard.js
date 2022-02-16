import CourseCardFront from "./CourseCardFront";

const CourseCard = ({ title, tags, author, img, reviewCount, price }) => {
  return (
    <div className="card course-card">
      <CourseCardFront
        title={title}
        tags={tags}
        author={author}
        img={img}
        reviewCount={reviewCount}
        price={price}
      />
      {/*<CourseCardBack />*/}
    </div>
  );
};

export default CourseCard;
