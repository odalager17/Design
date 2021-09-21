import React from "react";

import style from "./WeeklyTop.module.css";

import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function WeeklyTop() {
  return (
    <div className={style.container}>
      <div className={style.contTitle}>
        <p className={style.title}>Weekly Top Track</p>
        <div className={style.contArrow}>
          <button className={style.btnArrow}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className={style.btnArrow}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <div className={style.contMusic}>
        <CardMusic title="Song Title" desc="Author Of The Song" image={img1} />
        <CardMusic title="Song Title" desc="author of the song" image={img2} />
        <CardMusic title="Song Title" desc="author of the song" image={img3} />
        <CardMusic title="Song Title" desc="author of the song" image={img4} />
        <CardMusic title="Song Title" desc="author of the song" image={img5} />
        <CardMusic title="Song Title" desc="author of the song" image={img1} />
      </div>
    </div>
  );
}

const CardMusic = ({title, desc, image}) => (
  <div className={style.card}>
    <div className={style.cardImage}>
      <img className={style.image} src={image} alt="" />
    </div>
    <div className={style.cardInfo}>
      <p className={style.title}>{title}</p>
      <p className={style.desc}>{desc}</p>
    </div>
  </div>
);

export default WeeklyTop;
