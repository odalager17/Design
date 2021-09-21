import React from "react";

import style from "./Menu.module.css";
import classnames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faHome,
  faIcons,
  faStream,
  faPodcast,
  faUserFriends,
  faClone,
  faMusic,
  faPoll,
  faHeart,
  faFolder,
  faCompactDisc,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <div className={style.menu}>
      <div className={style.logo}>
        <FontAwesomeIcon className={style.icon} icon={faFire} />
        <h1 className={style.txtLogo}>Mix Cinere</h1>
      </div>
      <div className={style.recommend}>
        <div className={style.category}>
          <p className={style.text}>Recommend</p>
        </div>
        <ItemOpc icon={faHome} text="Home" selected={true} />
        <ItemOpc icon={faIcons} text="Explore" />
        <ItemOpc icon={faStream} text="Genres" />
        <ItemOpc icon={faPodcast} text="Radio" />
        <ItemOpc icon={faUserFriends} text="Artist" />
        <ItemOpc icon={faClone} text="Albums" />
      </div>
      <div className={style.lybrary}>
        <div className={style.category}>
          <p className={style.text}>My Lybrary</p>
        </div>
        <ItemOpc icon={faMusic} text="Recenty Played" />
        <ItemOpc icon={faPoll} text="Albums" />
        <ItemOpc icon={faHeart} text="Favorite Songs" />
        <ItemOpc icon={faFolder} text="Local File" />
      </div>
      <div className={style.playlist}>
        <div className={style.category}>
          <p className={style.text}>Playlist</p>
          <div className={style.iconAdd}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <ItemOpc icon={faCompactDisc} text="Unplugged" />
        <ItemOpc icon={faCompactDisc} text="Best of Arnob" />
        <ItemOpc icon={faCompactDisc} text="Best of James" />
        <ItemOpc icon={faCompactDisc} text="Folk Diary" />
      </div>
    </div>
  );
}

const ItemOpc = ({ icon, text, selected }) => (
  <div className={selected ? style.item : classnames(style.item, style.marginItem)}>
    {
			selected ? <div className={style.selected}></div> : null
		}
    <div className={selected ? classnames(style.iconItem, style.selectItem) : style.iconItem }>
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className={style.txtItem }>
      <p className={selected ? classnames(style.text, style.selectItem) : style.text}>{text}</p>
    </div>
  </div>
);

export default Menu;
