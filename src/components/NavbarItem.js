const NavbarItem = ({ title, hasDropdown, icon, id }) => {
  return (
    <div className="navbar-item" id={icon ? id : null}>
      <a href="#">
        <span className={icon ? "icon" : null}>{title ? title : icon}</span>
      </a>
      {/*hasDropdown ? :*/}
    </div>
  );
};

export default NavbarItem;
