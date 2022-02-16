import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./NavbarItem";
import NavbarSearch from "./NavbarSearch";

const NavbarRight = () => {
  const itemInfos = [
    { title: "지식공유참여", hasDropdown: false, icon: "", id: "share" },
    {
      title: "",
      hasDropdown: true,
      icon: <FontAwesomeIcon icon={All.faShoppingCart} />,
      id: "cart",
    },
    {
      title: "",
      hasDropdown: true,
      icon: <FontAwesomeIcon icon={All.faBell} />,
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
          id={id}
        />
      ))}

      <div className="navbar-item" id="recent-lecture">
        <a href="#" className="btn">
          <FontAwesomeIcon icon={All.faPencil} />
          <span>최근강의</span>
        </a>
      </div>
    </div>
  );
};

export default NavbarRight;
