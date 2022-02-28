import styled from "styled-components";

const StyledTagsContainer = styled.div`
  padding: 20px 0;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    max-width: 200vw;
    width: 120vw;
    margin-bottom: -0.5rem;
  }

  .tags .tag {
    padding: 10px 16px;
    margin-right: 0 8px 8px 0;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #eee;
    font-size: 14px;
    line-height: 1.4;
    color: #333;
  }
`;

const CategoryTags = ({ categories }) => {
  return (
    <StyledTagsContainer className="tags-container">
      <div className="tags">
        {categories.map(({ title }) => (
          <div className="tag" key={title}>
            <a href="#">{title}</a>
          </div>
        ))}
      </div>
    </StyledTagsContainer>
  );
};

export default CategoryTags;
