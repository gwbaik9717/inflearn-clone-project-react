import CoursesHeader from "./CoursesHeader";
import CoursesHeaderWithID from "./CoursesHeaderWithID";
import styled from "styled-components";

const StyledHeader = styled.div`
  .courses-header .title {
    color: #1e1e1e;
    font-size: 1.5rem;
    line-height: 1.5;
    display: flex;
    align-items: center;
  }

  .text-colored {
    padding: 0 5px;
    color: #1dc078 !important;
  }

  .courses-detail {
    margin-top: 4px;
    font-weight: 400;
    color: #757575;
    font-size: 0.9375rem;
  }
`;

const Header = ({ id, title }) => {
  return (
    <StyledHeader className="header">
      {id ? (
        <>
          <CoursesHeaderWithID id={id} />
          <div className="courses-detail">
            <p>
              다양한 프로그래밍 언어 랭킹 조사에서 언제나 상위권을 차지하는
              자바스크립트! 프론트엔드에서 백엔드까지 다양한 영역에서 사용할 수
              있어요.
            </p>
          </div>
        </>
      ) : (
        <CoursesHeader title={title} />
      )}
    </StyledHeader>
  );
};

export default Header;
