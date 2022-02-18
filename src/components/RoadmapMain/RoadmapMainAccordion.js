import styled from "styled-components";
import RoadmapMainAccordionItem from "./RoadmapMainAccordionItem";

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
    transform: rotate(45deg);
    transform-origin: center;
    cursor: pointer;
    padding: 2.5px;
  }

    .accordion-body {
      padding: 18px 24px;
      color: #595959;
      background-color: #fff;
      max-height: 100em;
    }
  }
`;

const RoadmapMainAccordion = ({ title, items, index }) => {
  return (
    <StyledAccordion index={index} className="accordion">
      <div className="accordion-header toggle">{title}</div>

      <div className="accordion-body">
        {items.map((item) => (
          <RoadmapMainAccordionItem key={item} id={item} label={item} />
        ))}
      </div>
    </StyledAccordion>
  );
};

export default RoadmapMainAccordion;
