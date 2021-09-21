import React from "react";

import style from "./Home.module.css";
import Menu from "./components/Menu";

function Home() {
  return (
    <div className={style.container}>
      <div className={style.contMenu}>
        <Menu />
      </div>
      <div className={style.contPrincipal}>
        <div className={style.contHeader}>
          <h1 className={style.title}>Inicio</h1>
          <p className={style.desc}>División De Estudios Profesionales</p>
        </div>
        <div className={style.contInfo}>
          <div className={style.contPage}>
            <ItemPage title="SII" desc="Sistema Integral de Información" />
            <ItemPage title="Comité Académico" desc="Normativos ITI" />
            <ItemPage title="Page" desc="Texto de ejemplo" />
          </div>
          <div className={style.contContact}>
            <div className={style.contTitle}>
              <p className={style.title}>Directorio</p>
              <p className={style.view}>Ver Información</p>
            </div>
            <div className={style.contImage}>
              <ItemDirectorio />
              {/* <ItemDirectorio /> */}
            </div>
          </div>
          <div className={style.contDestacados}></div>
        </div>
      </div>
      <div className={style.aside}></div>
    </div>
  );
}

const ItemPage = ({ title, desc }) => {
  return (
    <div className={style.card}>
      <div className={style.contIcon}>
        <div className={style.icon}>0</div>
      </div>
      <div className={style.contText}>
        <p className={style.title}>{title}</p>
        <p className={style.desc}>{desc}</p>
      </div>
    </div>
  );
};

const ItemDirectorio = () => {
  return (
    <div className={style.contProfile}>
      <div className={style.contImage}></div>
    </div>
  );
};

export default Home;
