import styled from "styled-components";

const StyledCategoryCard = styled.a`
  margin: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  min-height: 104px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  border-radius: 8px;
`;

const StyledIconCover = styled.div`
  background-image: url(https://cdn.inflearn.com/public/main/category/icons_sprites.png);
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-repeat: no;
  width: 52px;
  height: 52px;
  margin-bottom: 4px;
  box-sizing: content-box;
`;

const CategoryCard = ({ title, backgroundPosition }) => {
  return (
    <StyledCategoryCard href="#" class="category-card">
      <StyledIconCover
        backgroundPosition={backgroundPosition}
        class="icon-cover"
      ></StyledIconCover>
      <div class="icon-title">{title}</div>
    </StyledCategoryCard>
  );
};

export default CategoryCard;
