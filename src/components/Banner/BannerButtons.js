import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledNavBtn = styled.div`
  border-radius: 3px;
  display: inline-flex;
  width: 28px;
  height: 28px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
`;

const StyledIcon = styled.span`
  width: 1rem;
  height: 1rem;
  line-height: 1;
  font-size: 10px;
  color: #1e1e1e;
`;

const BannerButtons = () => {
  return (
    <div className="buttons-container container">
      <div className="buttons-wrapper">
        <StyledNavBtn className="swiper-prev navBtn">
          <StyledIcon className="icon">
            <FontAwesomeIcon icon={All.faChevronLeft} />
          </StyledIcon>
        </StyledNavBtn>

        <StyledNavBtn className="swiper-next navBtn">
          <StyledIcon className="icon">
            <FontAwesomeIcon icon={All.faChevronRight} />
          </StyledIcon>
        </StyledNavBtn>
      </div>
    </div>
  );
};

export default BannerButtons;
