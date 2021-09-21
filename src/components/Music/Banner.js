import React from "react";

import style from "./Banner.module.css";
import classnames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faRandom,
  faHeart,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

function Banner() {
  return (
    <div className={style.banner}>
      <div className={style.contText}>
        <p className={style.text}>DREAM TOP SIX TRAIN</p>
      </div>
      <div className={style.contAction}>
        <div className={style.contPlay}>
          <button className={classnames(style.btnPlay, style.btn)}>
            <FontAwesomeIcon className={style.icon} icon={faPlay} />
            PLAY ALL
          </button>
          <button className={style.btnMix}>
            <FontAwesomeIcon className={style.icon} icon={faRandom} />
            MIX
          </button>
        </div>
        <div className={style.contButton}>
          <button className={classnames(style.btnCircle, style.btn)}>
            <FontAwesomeIcon className={style.icon} icon={faHeart} />
          </button>
          <button className={classnames(style.btnCircle, style.btn)}>
            <FontAwesomeIcon className={style.icon} icon={faShareAlt} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
