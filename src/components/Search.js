import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import "../styles/Search.css";

const Search = () => {
  return (
    <section className="search">
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
    </section>
  );
};

export default Search;
