import MenuItem from "./MenuItem";

const MenuList = ({ mainTitle, menuTitles }) => {
  return (
    <div className="menu-list">
      <div className="menu-title">{mainTitle}</div>
      <div className="menu-items">
        {menuTitles.map((menuTitle) => (
          <MenuItem key={menuTitle} menuTitle={menuTitle} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
