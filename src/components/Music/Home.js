import React from "react";

import style from "./Home.module.css";

import Menu from "./Menu";
import Header from "./Header";
import Banner from "./Banner";
import WeeklyTop from "./WeeklyTop";
import BillboardTop from "./BillboardTop";
import ArtistTop from "./ArtistTop";
import Player from "./Player";

function Home() {
  return (
    <div className={style.container}>
      <Menu />
      <div className={style.contPrincipal}>
        <Header />
        <Banner />
        <WeeklyTop />
        <div className={style.contList}>
          <BillboardTop />
          <ArtistTop />
        </div>
      </div>
      <Player />
    </div>
  );
}

export default Home;
