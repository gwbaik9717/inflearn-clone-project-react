import NavbarItem from "./NavbarItem";
import styled from "styled-components";

const StyledNavbarLeft = styled.div`
  display: flex;
  align-items: center;

  .navbar-item {
    padding: 8px 14px 8px 14px;
  }

  .navbar-item > a {
    display: flex;
    padding: 8px 8px;
    height: 48px;
    align-items: center;
  }
`;

const NavbarLeft = () => {
  const itemInfos = [
    {
      title: "강의",
      hasDropdown: true,
      dropdownPosition: "top: 60px; left: 0;",
      nipplePosition: "left: 30px;",
      dropdownLv1: [
        "개발 · 프로그래밍",
        "보안 · 네트워크",
        "데이터 사이언스",
        "크리에이티브",
        "직무 · 마케팅",
        "학문 · 외국어",
        "커리어",
        "교양",
        "청강대 게임스쿨",
      ],
      dropdownLv2: [
        [
          "웹 개발",
          "프론트엔드",
          "백엔드",
          "풀스택",
          "모바일 앱 개발",
          "프로그래밍 언어",
          "알고리즘 · 자료구조",
          "데이터 사이언스",
          "데이터베이스",
          "개발 도구",
          "데브옵스 · 인프라",
          "게임 개발",
        ],
        ["보안", "시스템", "클라우드", "블록체인", "기타"],
        ["데이터 분석", "인공지능", "데이터 시각화", "데이터 수집 · 처리"],
        [
          "CAD · 3D 모델링",
          "웹 퍼블리싱",
          "UX/UI",
          "그래픽 디자인",
          "디자인 툴",
          "사진 · 영상",
          "VR/AR",
        ],
        [
          "오피스",
          "마케팅",
          "기획 · 전략 · PM",
          "업무 자동화",
          "금융 · 경영",
          "기타",
        ],
        ["수학", "외국어", "기타"],
        ["취업 · 이직", "개인 브랜딩", "창업", "기타"],
        ["교양"],
        [],
      ],
    },
    { title: "로드맵", hasDropdown: false },
    { title: "멘토링", hasDropdown: false },
    {
      title: "커뮤니티",
      hasDropdown: true,
      dropdownPosition: "top: 60px; right: 0;",
      nipplePosition: "left: 40px;",
      dropdownLv1: [
        "질문 & 답변",
        "자유주제",
        "스터디",
        "수강평",
        "멘토링 후기",
        "인프런 스토리",
      ],
    },
    {
      title: "인프런",
      hasDropdown: true,
      nipplePosition: "left: 40px;",
      dropdownPosition: "top: 60px; right: 0;",
      dropdownLv1: ["기업 채용", "인프랩 채용"],
    },
  ];

  return (
    <StyledNavbarLeft className="navbar-left">
      {itemInfos.map(
        ({
          title,
          hasDropdown,
          dropdownLv1,
          dropdownLv2,
          dropdownPosition,
        }) => (
          <NavbarItem
            key={title}
            title={title}
            hasDropdown={hasDropdown}
            dropdownLv1={dropdownLv1}
            dropdownLv2={dropdownLv2}
            dropdownPosition={dropdownPosition}
          />
        )
      )}
    </StyledNavbarLeft>
  );
};

export default NavbarLeft;
