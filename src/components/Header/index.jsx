import React, { useRef, useState } from "react";
//import { Link } from "react-router-dom";

import useOnClickOutside from "../../config/use-on-click-outside";
import "./index.scss";
function Header() {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useOnClickOutside(ref, () => setIsOpen(false));
  return (
    <div className="header">
      <div className="header__search">
        <img
          src="/images/icon_search.png"
          alt="icon-search"
          className="header__search-icon"
        />
        <input
          type="text"
          className="header__search-input"
          placeholder="Search"
        />
      </div>
      <div className="header__right">
        <img
          src="/images/icon_notify.png"
          alt=""
          className="header__right-notify"
        />
        <span className="header__right-avatar">P</span>
        <span
          onClick={toggle}
          className={
            isOpen
              ? "header__right-name dropdown-menu -active"
              : "header__right-name dropdown-menu"
          }
        >
          Phu
          <div ref={ref} className="dropdown-menu__list">
            <div className="dropdown-menu__item">
              <div className="dropdown">
                <span className="icon">
                  <i className="far fa-user"></i>
                </span>
                <span className="title">Profile</span>
              </div>
              <div className="dropdown ">
                <span className="icon">
                  <i className="far fa-sign-out-alt"></i>{" "}
                </span>
                <span className="title">Sign out</span>
              </div>
            </div>
          </div>
        </span>
        <img
          src="/images/icon_dropdown.png"
          alt=""
          className="header__right-dropdown"
        />
      </div>
    </div>
  );
}

export default Header;
