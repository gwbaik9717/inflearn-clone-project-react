import styled from "styled-components";

const StyledCard = styled.div`
  margin: 2px 2px 2px ${({ index }) => (index ? "20px" : "2px")};
  max-width: 32.2%;
`;

const StyledCardTitle = styled.div`
  overflow: hidden;
  margin-bottom: 4px;
  color: #333;
  font-size: 1.125rem;
  font-weight: 600;
`;

const StyledCardDesc = styled.div`
  height: 3rem;
  font-size: 1rem;
  overflow: hidden;
  font-weight: 400;
  color: rgb(89, 89, 89);
`;

const StyledCardImage = styled.img`
  margin-bottom: 20px;
`;

const CurationCard = ({ title, img, desc, index }) => {
  return (
    <StyledCard index={index} className="curation-card">
      <a href="#">
        <span className="image">
          <StyledCardImage src={img} alt={title} />
        </span>

        <StyledCardTitle className="card-title">{title}</StyledCardTitle>
        <StyledCardDesc className="card-desc">{desc}</StyledCardDesc>
      </a>
    </StyledCard>
  );
};

export default CurationCard;
