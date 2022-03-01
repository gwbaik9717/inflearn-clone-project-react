import styled from "styled-components";

const StyledTags = styled.section`
  margin-top: -18px;
  padding-bottom: 24px;

  .popular-tags__wrapper {
    max-width: 580px;
    padding-inline-start: 0px;
  }

  .popular-tags__tag-item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: 3e4042;
    font-weight: 500;
    font-size: 12px;
    border-radius: 20px;
    background-color: #f1f3f5;
    height: 28px;
    padding: 0 12px;
    margin: 4px;
    letter-spacing: -0.3px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

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
    <StyledTags className="popular-tags">
      <ul className="container popular-tags__wrapper">
        {tags.map((tag) => (
          <li className="popular-tags__tag-item" key={tag}>
            <a href="#">{tag}</a>
          </li>
        ))}
      </ul>
    </StyledTags>
  );
};

export default PopularTags;
