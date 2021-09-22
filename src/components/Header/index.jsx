import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from "../../assets/svgs/Icon";
import { generateName } from "../../config/GetName";
//import { Link } from "react-router-dom";

import useOnClickOutside from "../../config/use-on-click-outside";
import { logout } from "../../Redux/actions/userAction";
import "./index.scss";
function Header() {
  const ref = useRef();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useOnClickOutside(ref, () => setIsOpen(false));

  const { userInfo } = useSelector((state) => state.userLogin);
  //console.log(userInfo);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="header">
      <div className="header__search">
        <Icon.IconSearch className="header__search-icon" />
        <input
          type="text"
          className="header__search-input"
          placeholder="Search"
        />
      </div>
      <div className="header__right">
        <Icon.Noti className="header__right-notify" />
        <span className="header__right-avatar">
          {generateName(userInfo?.name || "Kathryn Murphy")}
        </span>
        <span
          onClick={toggle}
          className={
            isOpen
              ? "header__right-name dropdown-menu -active"
              : "header__right-name dropdown-menu"
          }
        >
          {userInfo?.name || "Kathryn Murphy"}
          <div ref={ref} className="dropdown-menu__list">
            <div className="dropdown-menu__item">
              <div className="dropdown ">
                {/* <span className="icon">
                  <i className="far fa-sign-out-alt"></i>{" "}
                </span> */}
                <Icon.Logout className="icon" />
                <Link to="/login" onClick={logoutHandler} className="title">
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </span>
        <Icon.DropdownHeader className="header__right-dropdown" />
      </div>
    </div>
  );
}

export default Header;
