import styled from "styled-components";

const StyledCategoryMenu = styled.div`
  border-bottom: 1px solid #e9ecef;
  padding: 1rem;

  .title {
    color: #212529;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.07;
    position: relative;
  }
`;

const CategoryMenuItem = ({ title, getIndex, index }) => {
  const sendIndex = () => {
    getIndex(index);
  };

  return (
    <StyledCategoryMenu className="category-menu-item" onClick={sendIndex}>
      <div className="title">{title}</div>
    </StyledCategoryMenu>
  );
};

export default CategoryMenuItem;
