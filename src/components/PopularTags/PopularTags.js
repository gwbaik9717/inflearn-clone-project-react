import PopularTag from "./PopularTag";
import "../../styles/PopularTags.css";

const PopularTags = () => {
  const tags = [
    "#MVC",
    "#Spring Boot",
    "#Back-End",
    "#JPA",
    "#Front-End",
    "#Python",
    "#Java",
    "#Spring",
    "#게임개발",
    "#JavaScrip",
  ];
  return (
    <section className="popular-tags">
      <ul className="container popular-tags__wrapper">
        {tags.map((tag) => (
          <PopularTag key={tag} tag={tag} />
        ))}
      </ul>
    </section>
  );
};

export default PopularTags;
