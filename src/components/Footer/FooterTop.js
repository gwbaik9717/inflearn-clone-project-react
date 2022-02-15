import MenuList from "./MenuList";

const FooterTop = () => {
  const titles = [
    {
      mainTitle: "인프런",
      menuTitles: ["공지사항", "인프런 소개", "인프랩 실Log", "채용 안내"],
    },
    {
      mainTitle: "고객센터",
      menuTitles: [
        "자주묻는 질문",
        "수료증 확인",
        "이용약관",
        "개인정보취급방침",
      ],
    },
    {
      mainTitle: "신청하기",
      menuTitles: ["지식공유참여", "인프런 비즈니스", "인프런 X 대학교"],
    },
    {
      mainTitle: "학습하기",
      menuTitles: [
        "IT 프로그래밍",
        "크리에이티브",
        "업무스킬",
        "수강코드 등록",
      ],
    },
    {
      mainTitle: "커뮤니티",
      menuTitles: [
        "학습로드맵",
        "질문 & 답변",
        "수강평 모아보기",
        "강의 · 기능요청",
      ],
    },
  ];

  return (
    <div className="footer-top">
      {titles.map(({ mainTitle, menuTitles }) => (
        <MenuList
          key={mainTitle}
          mainTitle={mainTitle}
          menuTitles={menuTitles}
        />
      ))}
    </div>
  );
};

export default FooterTop;
