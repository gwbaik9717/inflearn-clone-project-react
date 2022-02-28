import FooterBottomLeft from "./FooterBottomLeft";
import FooterBottomRight from "./FooterBottomRight";
import MenuList from "./MenuList";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const StyledFooter = styled.footer`
  background-color: #303740;

  .wrapper {
    max-width: 1152px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    padding: 32px 20px;
    border-bottom: 1px solid #444;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    padding: 32px 20px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 66px;
  }

  @media (max-width: 768px) {
    .footer-top {
      flex-direction: column;
      justify-content: normal;
      padding: 10px 20px 0;
      border-bottom: none;
    }

    .footer-bottom {
      flex-direction: column;
      padding: 24px 20px;
      align-items: center;
    }
  }
`;

const Footer = () => {
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
      isHiddenMobile: true,
    },
    {
      mainTitle: "커뮤니티",
      menuTitles: [
        "학습로드맵",
        "질문 & 답변",
        "수강평 모아보기",
        "강의 · 기능요청",
      ],
      isHiddenMobile: true,
    },
  ];
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="footer-top">
          {isMobile
            ? titles.map(
                ({ mainTitle, menuTitles, isHiddenMobile }) =>
                  !isHiddenMobile && (
                    <MenuList
                      key={mainTitle}
                      mainTitle={mainTitle}
                      menuTitles={menuTitles}
                    />
                  )
              )
            : titles.map(({ mainTitle, menuTitles }) => (
                <MenuList
                  key={mainTitle}
                  mainTitle={mainTitle}
                  menuTitles={menuTitles}
                />
              ))}
        </div>
        <div className="footer-bottom">
          <FooterBottomLeft />
          {!isMobile && <FooterBottomRight />}
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
