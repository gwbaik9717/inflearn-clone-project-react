import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledSearch = styled.section`
  padding: 48px 0 24px 0;

  .container {
    padding: 0 10px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .search-title {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.125;
  }

  .search-wrapper {
    width: 580px;
    position: relative;
    margin: 0 auto;
  }

  input {
    background-color: rgba(29, 192, 120, 0.12);
    border: 1px solid rgba(29, 192, 120, 0.24);
    padding: 14px 20px;
    border-radius: 28px;
    height: auto;
    color: #5f5f5f;
    font-size: 1rem;
    width: 100%;
    height: 54px;
  }

  input::placeholder {
    opacity: 1;
    color: rgba(29, 192, 120, 0.24);
  }

  input:focus {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
    background-color: rgb(246, 246, 246);
    border: 1px solid #dbdbdb;
  }

  input:focus::placeholder {
    color: #dbdbdb;
  }

  .search-submit {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    padding: 5px 12px;
    font-size: 20px;
    box-sizing: content-box;
    background-color: transparent;
  }

  .icon {
    width: 16px;
    height: 16px;
  }
`;

const Search = () => {
  return (
    <StyledSearch className="search">
      <div className="container">
        <div className="content">
          <h2 className="search-title title">배우고, 나누고, 성장하세요</h2>
          <div className="search-wrapper">
            <input type="text" placeholder="배우고 싶은 지식을 입력해보세요." />

            <button className="search-submit">
              <span className="icon">
                <FontAwesomeIcon icon={All.faSearch} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </StyledSearch>
  );
};

export default Search;
