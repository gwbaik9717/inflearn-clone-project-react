import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import RoadmapApply from "../RoadmapApply/RoadmapApply";
import Footer from "../Footer/Footer";
import { useParams } from "react-router";
import Dot from "../../img/Dot";
import CourseCard from "../Courses/CourseCard";
import CourseSearchAccordion from "./CourseSearchAccordion";
import ChevronRight from "../../img/ChevronRight";
import { useNavigate } from "react-router";
import { useState } from "react";

const StyledCourses = styled.section`
  .container {
    padding: 2rem 0;
    background: #fff;
  }

  .column-left {
    width: calc(100% / 6);
    flex: none;
  }

  .accordion {
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    border-radius: 4px;
    font-size: 1rem;
  }

  .accordion:first-child .accordion-header {
    border-top: 1px solid #e4e4e4;
  }

  .accordion-header {
    border-bottom: 1px solid #e4e4e4;
    border-left: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
    color: #595959;
    background-color: #fafafa;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    padding: 0.85rem;
    white-space: nowrap;
    justify-content: space-between;
  }

  .column-right {
    flex: 1;
  }

  .column-right .courses-header {
    margin: 0 0.75rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #dedede;
  }

  .courses-header .search {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .search .search-input {
    flex: 1 1 300px;
    max-width: 300px;
    height: 36px;
    border: 1px solid #dedede;
    background: #fff;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
    line-height: 1.5;
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    position: relative;
  }

  .search .btn {
    min-width: 53px;
    height: 36px;
    background: #1dc078;
    color: #fff;
    font-weight: 800;
    font-size: 1rem;
    margin-left: -1rem;
    padding: calc(0.375em - 1px) 0.75em;
  }

  .courses-main {
  }

  .breadcrumb {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0 0 0.75rem;
    padding-right: 1rem;
  }

  .breadcrumb ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .breadcrumb li {
    font-weight: 700;
    align-items: center;
    justify-content: flex-start;
    display: flex;
  }

  .breadcrumb li a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 0.75em;
    color: #454545;
    font-size: 18px;
  }

  .courses-main > .tags {
    margin: 0.5rem 0 1rem 0.75rem;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }

  .tags .search-skills {
    display: inline-flex;
    justify-content: flex-start;
    width: auto;
    margin-bottom: 0.4rem;
    margin-right: 0.5rem;
  }

  .tags .search-box {
    margin-right: -1px;
    font-size: 1rem;
    position: relative;
    text-align: left;
  }

  .search-box input {
    height: 31px;
    border-radius: 3px;
    background: #f6f6f6;
    color: #5f5f5f;
    border: 1px solid transparent;
    padding: 5px 9px;
  }

  .search-skills .btn {
    font-size: 1rem;
    position: relative;
    text-align: left;
    height: 31px;
    background: #1dc078;
    color: #fff;
    padding: calc(0.375em - 1px) 0.75em;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 36px;
    border: 1px solid transparent;
  }

  .search-skills .icon {
    width: 10px;
    height: 16px;
  }

  .skill-buttons {
    display: contents;
  }

  .skill-button {
    background: #b8b8b8;
    color: #fff;
    padding: 1px 0.6rem 2px 0.8rem;
    margin-bottom: 0.5rem;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    font-size: 1rem;
    height: 2em;
    margin: 0 0.5rem 0.5rem 0;
  }

  .skill-button:last-child {
    padding: 1px 0.6rem;
    background: #3298dc;
    font-weight: 800;
    font-size: 0.9rem;
  }

  .search-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 24px 12px 16px;
    flex-wrap: wrap;
  }

  .options-left {
    position: relative;
  }

  .course-filter-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #abb0b5;
    border-radius: 4px;
    padding: 10px 12px 10px 14px;
    background-color: #fff;
    cursor: pointer;
    height: 40px;
    line-height: 1.43;
    font-size: 14px;
    letter-spacing: -0.3px;
  }

  .filter-left {
    display: flex;
    align-items: center;
  }

  .filter-left .icon {
    width: 16px;
    height: 16px;
  }

  .filter-left .text {
    padding-left: 3px;
    color: #3e4042;
    font-size: 14px;
    letter-spacing: -0.3px;
  }

  .filter-right {
    display: flex;
    align-items: center;
    margin-left: 12px;
  }

  .filter-right .text {
    color: #3e4042;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.3px;
    line-height: 1.43;
    color: #abb0b5;
  }

  .divider {
    display: inline-block;
    margin: 0 6px;
    height: 12px;
    width: 1px;
    background-color: #e9ebee;
  }

  .options-right {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 40px;
    padding: 0 8px;
    border: 1px solid #abb0b5;
    border-radius: 4px;
  }

  .options-right .options-select {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding-right: 18px;
    z-index: 2;
    font-size: 14px;
    text-align: center;
    color: #3e4042;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  .options-right .icon {
    position: absolute;
    top: 11px;
    right: 8px;
    width: 16px;
    height: 16px;
  }

  .courses-container .columns {
    display: flex;
    flex-wrap: wrap;
  }

  .courses-container .course-card {
    width: 25%;
    flex: none;
    padding: 0.75rem;
  }

  .courses-footer {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pagination-container {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
  }

  .pagination-prev,
  .pagination-next {
    position: absolute;
    top: 0;
    min-width: 2.25em;
    border-radius: 4px;
    color: #363636;
    padding: 3.5px 9px;
    white-space: nowrap;
    margin: 0.25rem;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.25em;
    border: 1px solid #dbdbdb;
    font-size: 12px;
  }

  .pagination-prev {
    left: 0;
    order: 1;
  }

  .pagination-next {
    right: 0;
    order: 3;
  }

  .pagination-cover {
    order: 2;
  }

  .pagination-cover a {
    min-width: 2.25em;
    font-size: 12px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0.25rem;
    border: 1px solid transparent;
    border-radius: 4px;
    line-height: 1.5;
    padding: 3.5px 6px;
  }

  .pagination-cover .is-current {
    background-color: #1dc078;
    border-color: #1dc078;
    color: #fff;
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1180px;
    }
  }

  @media (max-width: 1200px) {
    .courses-container .course-card {
      width: calc(100% / 3);
    }
  }

  @media (max-width: 1024px) {
    .column-left {
      display: none;
    }
  }

  @media (min-width: 769px) {
    .columns {
      display: flex;
    }
  }

  @media (max-width: 768px) {
    .pagination-cover {
      display: none;
    }
  }
`;

const CourseSearch = () => {
  const { course } = useParams();
  const fields = [
    {
      title: "개발 · 프로그래밍",
      items: [
        "ALL",
        "웹 개발",
        "프론트엔드",
        "백엔드",
        "풀스택",
        "모바일 앱 개발",
        "프로그래밍 언어",
        "알고리즘 · 자료구조",
      ],
    },
    {
      title: "보안 · 네트워크",
      items: [
        "ALL",
        "CAD · 3D 모델링",
        "웹 퍼블리싱",
        "UX/UI",
        "그래픽 디자인",
        "디자인툴",
      ],
    },
    {
      title: "크리에이티브",
      items: [
        "ALL",
        "웹 개발",
        "프론트엔드",
        "백엔드",
        "풀스택",
        "모바일 앱 개발",
        "프로그래밍 언어",
        "알고리즘 · 자료구조",
      ],
    },
    {
      title: "직무 · 마케팅",
      items: [
        "ALL",
        "오피스",
        "마케팅",
        "기획 · 전략 · PM",
        "업무 자동화",
        "금융 · 경영",
        "기타",
      ],
    },
    {
      title: "학문 · 외국어",
      items: ["ALL", "수학", "외국어", "기타"],
    },
    {
      title: "커리어",
      items: ["ALL", "취업 · 이직", "개인 브랜딩", "창업", "기타"],
    },
  ];
  const buttons = [
    "Python",
    "데이터 분석",
    "JavaScript",
    "MS-Office",
    "HTML/CSS",
    "모바일 앱 개발",
    "Front-End",
    "3D 모델링",
    "Java",
    "Back-End",
    "게임개발",
    "정보보안",
    "웹 개발",
    "Android",
    "데이터 시각화",
  ];
  const datas = [
    {
      title: "UIKit - iOS14 실무 가이드 <iOS앱 진짜 개발자 되기>",
      tags: ["+300명"],
      author: "iOS Developer",
      img: "https://cdn.inflearn.com/public/courses/327148/cover/f14566b3-1845-48ee-af5f-86555dd273a4/327148-eng.png",
      reviewCount: 21,
      price: "₩88,000",
      level: "초급",
      fields: "취업 · 이직, 교양 · 기타",
      skills: "취업, 면접, 포트폴리오",
    },
    {
      title: "일주일 완성! 3dsmax 입문 (자동차 및 캐릭터 만들기)",
      tags: ["+300명"],
      author: "목마하임(MokmaHeim)",
      img: "https://cdn.inflearn.com/public/courses/324504/course_cover/1ba6aa0e-a276-4d62-9979-c5a29e690c51/m_3ds_basic.png",
      reviewCount: 19,
      price: "₩55,000",
      level: "입문",
      fields: "취업 · 이직, 게임 개발",
      skills: "취업, 기술면접, 포트폴리오",
    },
    {
      title: "Confluence를 활용해서 효과적으로 지식 관리와 프로젝트 협업하기",
      tags: ["+100명"],
      author: "lesstif",
      img: "https://cdn.inflearn.com/public/courses/326342/cover/e8771ba0-1550-4874-81f5-08823fac4ba9/326342-eng (1).png",
      reviewCount: 13,
      price: "₩88,000",
      level: "초급",
      fields: "취업 · 이직, 교양 · 기타",
      skills: "취업, 면접, 포트폴리오",
    },
    {
      title: "제대로 파는 Git & GitHub - by 얄코",
      tags: ["+500명", "새강의", "할인중"],
      author: "얄팍한 코딩사전",
      img: "https://cdn.inflearn.com/public/courses/328284/cover/5de1ff7b-691b-4047-9501-0f46d0f2a5a7/git-github-infleran 복사.png",
      reviewCount: 25,
      price: "₩30,800",
      level: "초급",
      fields: "취업 · 이직, 교양 · 기타",
      skills: "취업, 면접, 포트폴리오",
    },
    {
      title:
        "비전공자를 위한 넓고 얇은 IT 지식 & 나의 개발 유형 알아보기! <M.B.I.T>",
      tags: ["+500명"],
      author: "제주코딩베이스캠프",
      img: "https://cdn.inflearn.com/public/courses/326514/cover/22caf762-a466-47fd-8d21-1f70ee2d91aa",
      reviewCount: 25,
      price: "₩30,800",
      level: "초급",
      fields: "취업 · 이직, 교양 · 기타",
      skills: "취업, 면접, 포트폴리오",
    },
    {
      title:
        "[C#과 유니티로 만드는 MMORPG 게임 개발 시리즈] Part1: C# 기초 프로그래밍 입문",
      tags: ["+2900명"],
      author: "Rookiss",
      img: "https://cdn.inflearn.com/public/courses/324718/course_cover/9fa72fd8-ce56-4091-aa73-a31145acf37e/rookiss-rpg-1.png",
      reviewCount: 25,
      price: "₩44,000",
      level: "초급",
      fields: "취업 · 이직, 교양 · 기타",
      skills: "취업, 면접, 포트폴리오",
    },
    {
      title: "Python 부트캠프",
      tags: ["+500명"],
      author: "제주코딩베이스캠프",
      img: "https://cdn.inflearn.com/public/course-325339-cover/9f2bb0a8-26c3-4520-aaf6-5a3ff4466b7d",
      reviewCount: 25,
      price: "₩30,800",
      level: "초급",
      fields: "취업 · 이직, 교양 · 기타",
      skills: "취업, 면접, 포트폴리오",
    },
    {
      title: "뉴욕 프로덕트 디자이너가 알려주는, 입문자를 위한 UX디자인 개론",
      tags: ["+500명"],
      author: "에릭",
      img: "https://cdn.inflearn.com/public/course-325638-cover/5bf811f2-72e6-46b1-980e-4ddcd73d3459",
      reviewCount: 68,
      price: "₩74,800",
      level: "초급",
      fields: "취업 · 이직, 교양 · 기타",
      skills: "취업, 면접, 포트폴리오",
    },
  ];

  const [searchKeyword, setSearchKeyword] = useState(course);

  let navigate = useNavigate();

  const onChangeSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <>
      <Header />
      <main>
        <StyledCourses className="courses">
          <div className="container">
            <div className="columns">
              <div className="column-left">
                <div className="accordions">
                  <div className="accordion">
                    <div className="accordion-header">전체보기</div>
                  </div>
                  {fields.map(({ title, items }) => (
                    <CourseSearchAccordion title={title} items={items} />
                  ))}
                </div>
              </div>

              <div className="column-right">
                <div className="courses-header">
                  <div className="search">
                    <input
                      value={searchKeyword}
                      onChange={onChangeSearchKeyword}
                      className="search-input"
                      placeholder="강의 검색하기"
                      type="text"
                    ></input>
                    <button className="btn">검색</button>
                  </div>
                </div>

                <div className="courses-main">
                  <div className="breadcrumb">
                    <ul>
                      <li>
                        <a href="#">전체</a>
                      </li>
                    </ul>
                  </div>

                  <div className="tags">
                    <div className="search-skills">
                      <div className="search-box">
                        <input type="text" placeholder="기술검색" />
                      </div>
                      <div className="btn-wrapper">
                        <div className="btn">
                          <span className="icon">
                            <FontAwesomeIcon icon={All.faTimes} />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="skill-buttons">
                      {buttons.map((button) => (
                        <button className="skill-button" key={button}>
                          {button}
                        </button>
                      ))}
                      <button className="skill-button">
                        <FontAwesomeIcon icon={All.faEllipsis} />
                      </button>
                    </div>
                  </div>

                  <div className="search-options">
                    <div className="options-left">
                      <div className="course-filter-wrapper">
                        <span className="filter-left">
                          <span className="icon">
                            <FontAwesomeIcon icon={All.faSliders} />
                          </span>
                          <span className="text">필터</span>
                        </span>
                        <span className="filter-right">
                          <span className="text">유료</span>
                          <Dot />
                          <span className="text">무료</span>
                          <Dot />
                          <span className="text">할인중</span>
                          <span className="divider"></span>
                          <span className="text">입문</span>
                          <Dot />
                          <span className="text">초급</span>
                          <Dot />
                          <span className="text">중급 이상</span>
                        </span>
                      </div>
                    </div>

                    <div className="options-right">
                      <select className="options-select">
                        <option value="검색순">검색순</option>
                        <option value="추천순">추천순</option>
                        <option value="인기순">인기순</option>
                        <option value="최신순">최신순</option>
                        <option value="평점순">평점순</option>
                        <option value="학생수순">학생수순</option>
                      </select>
                      <span className="icon">
                        <ChevronRight />
                      </span>
                    </div>
                  </div>

                  <div className="courses-container">
                    <div className="columns">
                      {datas.map(
                        ({
                          title,
                          tags,
                          author,
                          img,
                          reviewCount,
                          price,
                          level,
                          fields,
                          skills,
                        }) => (
                          <CourseCard
                            title={title}
                            tags={tags}
                            author={author}
                            img={img}
                            reviewCount={reviewCount}
                            price={price}
                            level={level}
                            fields={fields}
                            skills={skills}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="courses-footer">
                  <div className="pagination-container">
                    <a className="pagination-prev">이전 페이지</a>

                    <ul className="pagination-cover">
                      <li>
                        <a href="#" className="is-current">
                          1
                        </a>
                      </li>
                    </ul>

                    <a className="pagination-next">다음 페이지</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StyledCourses>
      </main>
      <RoadmapApply />
      <Footer />
    </>
  );
};

export default CourseSearch;
