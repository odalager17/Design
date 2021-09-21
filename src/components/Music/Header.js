import React from "react";

import style from "./Header.module.css";
import classnames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import image from "../../assets/img4.png";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.contSearch}>
        <div className={style.icon}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input className={style.input} placeholder="Search" />
      </div>
      <div className={style.contProfile}>
        <div className={style.notification}>
          <FontAwesomeIcon className={style.icon} icon={faBell} />
          <div className={style.accountant}></div>
        </div>
        <div className={style.profile}>
          <div className={style.contImage}>
            <img className={style.image} src={image} alt="" />
          </div>
          <div className={style.icon}>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
