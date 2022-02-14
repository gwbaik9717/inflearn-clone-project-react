import NavbarItem from "./NavbarItem";
import NavbarSearch from "./NavbarSearch";

const NavbarRight = () => {
  const itemInfos = [
    { title: "지식공유참여", hasDropdown: false, icon: "", id: "share" },
    {
      title: "",
      hasDropdown: true,
      icon: <i className="fas fa-shopping-cart"></i>,
      id: "cart",
    },
    {
      title: "",
      hasDropdown: true,
      icon: <i className="far fa-bell"></i>,
      id: "message",
    },
    {
      title: "",
      hasDropdown: true,
      icon: (
        <img
          src="https://cdn.inflearn.com/public/main/profile/default_profile.png"
          alt="profile_img"
        />
      ),
      id: "profile",
    },
  ];

  return (
    <div className="navbar-right">
      <NavbarSearch />

      {itemInfos.map(({ id, title, hasDropdown, icon }) => (
        <NavbarItem
          key={id}
          title={title}
          hasDropdown={hasDropdown}
          icon={icon}
        />
      ))}

      <div className="navbar-item" id="recent-lecture">
        <a href="#" className="btn">
          <i className="fas fa-pencil-alt"></i>
          <span>최근강의</span>
        </a>
      </div>
    </div>
  );
};

export default NavbarRight;
