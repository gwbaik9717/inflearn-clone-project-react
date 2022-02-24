import { useState } from "react";
import styled from "styled-components";
import RoadmapMainAccordionItem from "../RoadmapMain/RoadmapMainAccordionItem";
const StyledPanel = styled.div`
  min-width: 180px;

  .sticky {
    position: sticky;
    top: 84px;
  }

  .search-box {
    display: flex;
  }

  .search-box input {
    height: 44px;
    background: #fff;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    width: 100%;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    padding: 5px 9px;
    font-size: 16px;
  }

  .search-box .btn {
    display: inline-flex;
    height: 44px;
    padding: 5px 12px;
    border-radius: 4px;
    background-color: #f5f5f5;
    border: 1px solid #e4e4e4;
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    text-align: center;
    white-space: nowrap;
    font-size: 16px;
  }

  .select {
    margin-top: 16px;
    height: 44px;
    width: 100%;
  }

  select {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    border: 1px solid #e4e4e4;
    padding: 5px 40px 5px 9px;
    font-size: 1em;
  }

  .accordions {
    margin-top: 16px;
    border: 1px solid #dedede;
    border-radius: 4px;
  }

  .filter-reset {
    font-size: 12px;
    margin: 24px 0;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 80.641px;
  }

  .filter-reset .icon {
    height: 12px;
    width: 12px;
  }
`;

const StyledAccordion = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: ${({ index }) => (index ? 0 : "4px")};
  font-size: 1rem;
  border-top: ${({ index }) => (index ? "1px solid #dedede" : null)};

  .accordion-header {
    padding: 14px 24px;
    display: flex;
    justify-content: flex-start;
    font-weight: 700;
    border: 0;
    border-bottom: 1px solid #e4e4e4;
    background-color: #f5f5f5;
    height: 50px;
    align-items: center;
    color: #595959;
    cursor: pointer;
  }

  .accordion-header::after {
    display: block;
    content: "";
    border: 2px solid #595959;
    height: 0;
    width: 0;
    margin-top: 2px;
    margin-left: 10.4px;
    box-sizing: border-box;
    border-width: 0 2px 2px 0;
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(-45deg)")};
    transform-origin: center;
    cursor: pointer;
    padding: 2.5px;
    transition: transform 0.2s;
  }

  .accordion-body {
    padding: 12px;
    color: #595959;
    background-color: #fff;
    max-height: 100em;
  }
`;

const MentorMainLeft = () => {
  const options = ["최근신청", "신규멘토", "인기"];
  const items = [
    "개발 · 프로그래밍",
    "보안 · 네트워크",
    "데이터 사이언스",
    "크리에이티브",
    "직무 · 마케팅",
    "학문 · 외국어",
    "커리어",
    "교양",
  ];

  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <StyledPanel className="panel-left">
      <div className="sticky">
        <div className="search-box">
          <input type="text" className="input" />
          <button className="btn">검색</button>
        </div>

        <div className="select sort-options">
          <select data-type="order">
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="accordions checkbox-accordions">
          <StyledAccordion isOpen={isOpen} className="accordion">
            <div className="accordion-header toggle" onClick={toggleAccordion}>
              분야별
            </div>

            <div className={isOpen ? "accordion-body" : "is-hidden"}>
              {items.map((item) => (
                <RoadmapMainAccordionItem key={item} id={item} label={item} />
              ))}
            </div>
          </StyledAccordion>
        </div>

        <a href="#" className="filter-reset">
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96zM441.8 289.6c-16.94-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-37.96 0-73-14.18-100.2-37.8L200 334C216.9 317.2 205.2 288.6 181.6 288H34.66C24.32 288.3 16 296.7 16 307.1v145.9c0 24.04 29.07 36.08 46.07 19.07l48.5-48.53C149.5 458.8 200.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z" />
            </svg>
          </span>
          필터 초기화
        </a>
      </div>
    </StyledPanel>
  );
};

export default MentorMainLeft;
