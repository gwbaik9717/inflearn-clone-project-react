import styled from "styled-components";
import { useState } from "react";

const StyledAccordion = styled.div`
  cursor: pointer;

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
    color: #595959;
    background: #fff;
    max-height: ${({ isOpen }) => (isOpen ? "100em" : "0")};
    overflow-y: hidden;
    transition: max-height 0.2s ease;
    font-size: 1rem;
  }

  .accordion-body a {
    display: inline-flex;
    align-items: center;
    width: 100%;
    background: #fff;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-right: 1px solid #e4e4e4;
    border-left: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font-size: 0.925rem;
  }
`;
const CourseSearchAccordion = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <StyledAccordion isOpen={isOpen} className="accordion" key={title}>
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
      </div>
      <div className="accordion-body">
        {items.map((item) => (
          <a href="#">{item}</a>
        ))}
      </div>
    </StyledAccordion>
  );
};

export default CourseSearchAccordion;
