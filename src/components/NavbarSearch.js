import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";

const NavbarSearch = () => {
  return (
    <div className="navbar-search">
      <input type="text" className="input" />
      <span>
        <FontAwesomeIcon icon={All.faSearch} />
      </span>
    </div>
  );
};

export default NavbarSearch;
