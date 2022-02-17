import styled from "styled-components";

const StyledHeader = styled.div`
  margin-bottom: 20px;

  .title {
    color: #1e1e1e;
    font-size: 1.5rem;
    line-height: 1.5;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  p {
    color: #757575;
    font-size: 0.9375rem;
  }
`;

const ApplyHeader = () => {
  return (
    <StyledHeader className="header">
      <h2 className="title">다양한 서비스를 신청하세요.</h2>
      <p className="apply-detail">
        인프런의 지식공유자 ˙ 비즈니스 ˙ 대학생 신청방법에 대해 알아보세요.
      </p>
    </StyledHeader>
  );
};

export default ApplyHeader;
