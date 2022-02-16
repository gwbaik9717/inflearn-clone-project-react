import NavbarItem from "./NavbarItem";

const NavbarLeft = () => {
  const itemInfos = [
    { title: "강의", hasDropdown: true },
    { title: "로드맵", hasDropdown: false },
    { title: "멘토링", hasDropdown: false },
    { title: "커뮤니티", hasDropdown: true },
    { title: "인프런", hasDropdown: true },
  ];

  return (
    <div className="navbar-left">
      {itemInfos.map(({ title, hasDropdown }) => (
        <NavbarItem key={title} title={title} hasDropdown={hasDropdown} />
      ))}
    </div>
  );
};

export default NavbarLeft;
