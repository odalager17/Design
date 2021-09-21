import React from "react";

import style from "./ArtistTop.module.css";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.jpg";

function ArtistTop() {
  return (
    <div className={style.container}>
      <div className={style.contTitle}>
        <p className={style.title}>Monthly Top Artist</p>
      </div>
      <div className={style.contItem}>
        <ItemArtist image={img1} />
        <ItemArtist image={img2} />
        <ItemArtist image={img3} />
        <ItemArtist image={img4} />
        <ItemArtist image={img5} />
      </div>
    </div>
  );
}

const ItemArtist = ({ image }) => (
  <div className={style.contImage}>
    <img className={style.image} src={image} alt="" />
  </div>
);

export default ArtistTop;
