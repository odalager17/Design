import React from "react";

import style from "./Player.module.css";
import classnames from "classnames";

import img1 from "../../assets/img1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchangeAlt,
  faPause,
  faStepBackward,
  faStepForward,
  faRandom,
  faVolumeUp,
  faCog,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Player() {
  return (
    <div className={style.container}>
      <div className={style.contSong}>
        <div className={style.contImage}>
          <img className={style.image} src={img1} alt="" />
        </div>
        <div className={style.contInfo}>
          <p className={style.title}>Song Title</p>
          <p className={style.desc}>Author Of The Song</p>
        </div>
      </div>
      <div className={style.contControl}>
        <div className={style.contIcon}>
          <FontAwesomeIcon
            className={classnames(style.icon, style.iconColor)}
            icon={faExchangeAlt}
          />
        </div>
        <div className={style.contIcon}>
          <FontAwesomeIcon className={style.icon} icon={faStepBackward} />
        </div>
        <div className={style.contIcon}>
          <FontAwesomeIcon className={style.icon} icon={faPause} />
        </div>
        <div className={style.contIcon}>
          <FontAwesomeIcon className={style.icon} icon={faStepForward} />
        </div>
        <div className={style.contIcon}>
          <FontAwesomeIcon
            className={classnames(style.icon, style.iconColor)}
            icon={faRandom}
          />
        </div>
      </div>
      <div className={style.contTimeline}>
        <div className={style.contTime}>
          <p className={style.time}>1:36</p>
        </div>
        <div className={style.timeline}>
          <div className={style.line}></div>
        </div>
        <div className={style.contTime}>
          <p className={style.time}>4:56</p>
        </div>
      </div>
      <div className={style.contVolume}>
        <div className={style.icon}>
          <FontAwesomeIcon icon={faVolumeUp} />
        </div>
        <div className={style.lineVolume}>
          <div className={style.line}></div>
        </div>
      </div>
      <div className={style.contConfig}>
        <FontAwesomeIcon icon={faCog} />
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
}

export default Player;
