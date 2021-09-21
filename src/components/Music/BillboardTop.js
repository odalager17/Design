import React from "react";

import style from "./BillboardTop.module.css";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";

function BillboardTop() {
  return (
    <div className={style.container}>
      <div className={style.contTitle}>
        <p className={style.title}>Billboard Top Charts</p>
      </div>
      <div className={style.contItem}>
        <ItemMusic image={img1} title="Song Title" desc="Author Of The Song" />
        <ItemMusic image={img2} title="Song Title" desc="Author Of The Song" />
        <ItemMusic image={img3} title="Song Title" desc="Author Of The Song" />
        <ItemMusic image={img4} title="Song Title" desc="Author Of The Song" />
        <ItemMusic image={img5} title="Song Title" desc="Author Of The Song" />
      </div>
    </div>
  );
}

const ItemMusic = ({ image, title, desc }) => (
  <div className={style.card}>
    <div className={style.contImage}>
      <img className={style.image} src={image} alt="" />
    </div>
    <div className={style.contInfo}>
      <p className={style.title}>{title}</p>
      <p className={style.desc}>{desc}</p>
    </div>
    <div className={style.contTime}>
      <p className={style.desc}>4:26</p>
    </div>
    <div className={style.contAction}>
      <FontAwesomeIcon icon={faDownload} />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faPlus} />
    </div>
  </div>
);

export default BillboardTop;
