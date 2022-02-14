const NavbarItem = ({ title, hasDropdown, icon, id }) => {
  return (
    <div className="navbar-item">
      <a href="#">
        <span>{title ? title : icon}</span>
      </a>
      {/*hasDropdown ? :*/}
    </div>
  );
};

export default NavbarItem;
