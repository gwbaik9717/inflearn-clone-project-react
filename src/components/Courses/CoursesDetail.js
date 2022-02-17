import styled from "styled-components";

const StyledCoursesDetail = styled.div`
  margin-top: 4px;
  font-weight: 400;
  color: #757575;
  font-size: 0.9375rem;
`;

const CoursesDetail = () => {
  return (
    <StyledCoursesDetail className="courses-detail">
      <p>
        다양한 프로그래밍 언어 랭킹 조사에서 언제나 상위권을 차지하는
        자바스크립트! 프론트엔드에서 백엔드까지 다양한 영역에서 사용할 수
        있어요.
      </p>
    </StyledCoursesDetail>
  );
};

export default CoursesDetail;
