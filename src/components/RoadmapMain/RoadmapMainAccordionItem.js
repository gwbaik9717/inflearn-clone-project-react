import styled from "styled-components";

const StlyedAccordionItem = styled.div`
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;

  .accordion-checkbox {
    margin-left: -20px;
    padding-left: 2rem;
    display: flex;
    align-items: center;
    width: 100%;

    justify-content: flex-start;
    color: #787878;
  }

  input {
    opacity: 0;
    margin: -1px;
  }

  label {
    position: relative;
    font-size: 0.85rem;
    font-size: 1rem !important;
  }

  label:before {
    background-color: #fff;
    display: block;
    height: 15px;
    width: 15px;
    border-radius: 0;
    border: 1px solid #d2d2d2;
    content: "";
    position: absolute;
    top: 5px;
    left: -20px;
    box-sizing: border-box;
  }

  input
`;

const RoadmapMainAccordionItem = ({ id, label }) => {
  return (
    <StlyedAccordionItem className="accordion-item">
      <div className="accordion-checkbox">
        <input className="is-hidden" type="checkbox" id={id} />
        <label htmlFor={id}> {label} </label>
      </div>
    </StlyedAccordionItem>
  );
};

export default RoadmapMainAccordionItem;
