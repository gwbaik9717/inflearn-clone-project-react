import { Link } from "react-router-dom";

const NavbarItem = ({ title, hasDropdown, icon, id }) => {
  return (
    <div className="navbar-item" id={icon ? id : null}>
      <Link to={`/roadmap`}>
        <span className={icon ? "icon" : null}>{title ? title : icon}</span>
      </Link>
      {/*hasDropdown ? :*/}
    </div>
  );
};

export default NavbarItem;
