import styled from "styled-components";

const StyledSliderDetail = styled.div`
  margin-top: 4px;
  font-weight: 400;
  color: #757575;
  font-size: 0.9375rem;
`;

const SliderDetail = ({ sort, desc }) => {
  return (
    <StyledSliderDetail className={`${sort}-detail`}>
      <p>{desc}</p>
    </StyledSliderDetail>
  );
};

export default SliderDetail;
