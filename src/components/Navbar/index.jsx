import { useState } from "react";
import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch, IoIosSettings, IoIosCloseCircle } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { CgOrganisation } from "react-icons/cg";
import { IoCubeOutline, IoSettingsOutline } from "react-icons/io5";
import { LuUsers, LuHistory, LuWallet } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const navOptions = [
  {
    id: 1,
    name: "Home",
    icon: <FiHome />,
  },
  {
    id: 2,
    name: "Organisation",
    icon: <CgOrganisation />,
  },
  {
    id: 3,
    name: "Assets",
    icon: <IoCubeOutline />,
  },
  {
    id: 4,
    name: "Users",
    icon: <LuUsers />,
  },
  {
    id: 5,
    name: "Settings",
    icon: <IoIosSettings />,
  },
  {
    id: 6,
    name: "Trade",
    icon: <BsGraphUpArrow />,
  },
  {
    id: 7,
    name: "History",
    icon: <LuHistory />,
  },
  {
    id: 8,
    name: "Wallet",
    icon: <LuWallet />,
  },
];

const extraOptions = [
  {
    id: 9,
    name: "Notifications",
    icon: <FaBell />,
  },
  {
    id: 10,
    name: "Support",
    icon: <RxQuestionMarkCircled />,
  },
  {
    id: 11,
    name: "Settings",
    icon: <IoSettingsOutline />,
  },
];

const SideNavBar = () => {
  const [active, setActive] = useState(false);
  const [activeNavigation, setActiveNavigation] = useState(navOptions[0].id);

  const handleMenu = () => {
    setActive(!active);
  };

  // on click active navigation
  const handleActiveNavigation = (id) => {
    setActiveNavigation(id);
  };

  const profile = () => {
    return (
      <div className="profile-container">
        <CgProfile size={25} />
        <div>
          <h2 className="profile-name">Pavan Kumar</h2>
          <p className="profile-email">vpkumar1020@gmail.com</p>
        </div>
      </div>
    );
  };

  return active ? (
    <div className="navbar">
      <div>
        <div className="container1">
          <div className="logo-container">
            <img
              src="https://res.cloudinary.com/dwsbjx12w/image/upload/v1711509644/download_k5cnmn.png"
              alt="logo"
              className="logo"
            />
            <p className="logo-name">
              Carbon <br /> Cell
            </p>
          </div>
          <IoIosCloseCircle
            onClick={handleMenu}
            size={20}
            className="menu-icon"
          />
        </div>
        <div className="search-container">
          <IoIosSearch size={20} className="search-icon" />
          <input type="search" placeholder="Search" className="search" />
        </div>
        <ul className="unordered-nav-options">
          {navOptions.map((item) => (
            <li
              key={item.id}
              onClick={() => handleActiveNavigation(item.id)}
              className={
                activeNavigation == item.id
                  ? "active-nav-item nav-item"
                  : "nav-item"
              }
            >
              <Link to={`/${item.name}`} className="link">
                {item.icon}
                <p className="nav-item-name">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="unordered-nav-options">
          {extraOptions.map((item) => (
            <li
              key={item.id}
              onClick={() => handleActiveNavigation(item.id)}
              className={
                activeNavigation == item.id
                  ? "active-nav-item nav-item"
                  : "nav-item"
              }
            >
              <Link to={`/${item.name}`} className="link">
                {item.icon}
                <p className="nav-item-name">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
        {profile()}
      </div>
    </div>
  ) : (
    <div className="closed-view">
      <div>
        <GiHamburgerMenu size={20} onClick={handleMenu} className="menu-icon" />
        <ul>
          {navOptions.map((item) => (
            <li
              key={item.id}
              onClick={() => handleActiveNavigation(item.id)}
              className={
                activeNavigation == item.id
                  ? "active-nav-item nav-item"
                  : "nav-item"
              }
            >
              <Link to={`/${item.name}`} className="link">
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {extraOptions.map((item) => (
            <li
              key={item.id}
              className={
                activeNavigation == item.id
                  ? "active-nav-item nav-item"
                  : "nav-item"
              }
              onClick={() => handleActiveNavigation(item.id)}
            >
              <Link to={`/${item.name}`} className="link">
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
        <CgProfile size={25} />
      </div>
    </div>
  );
};

export default SideNavBar;
