import React, { useState } from "react";

import style from "./Menu.module.css";
import classnames from "classnames";

import LogoTec from "../../../assets/logoTec.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faThLarge,
  faProjectDiagram,
  faConciergeBell,
  faUserTie,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={style.contMenu}>
      <ul
        className={
          open
            ? classnames(style.menuItems, style.show)
            : classnames(style.menuItems)
        }
      >
        <div className={style.menuInfo}>
          <div className={style.contIcon}>
            <img className={style.icon} src={LogoTec} alt="" />
          </div>
          <div className={style.contText}>
            <p className={style.txtPrincipal}>TecNM</p>
            <p className={style.txtSecundario}>Campus Istmo</p>
          </div>
        </div>
        <div className={style.menuService}>
          <li className={style.contOpcion}>
            <div className={style.opcion}>
              <FontAwesomeIcon icon={faThLarge} />
              <p className={style.txtBtn}>Inicio</p>
            </div>
          </li>
          <li className={classnames(style.contOpcion, style.subMenu)}>
            <div className={style.opcion}>
              <FontAwesomeIcon icon={faProjectDiagram} />
              <p className={style.txtBtn}>Reticulas</p>
            </div>
            <div className={style.subOpcion}>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Arquitectura</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Ing. Civil</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Ing. Gestión Empresarial</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Ing. Industrial</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Ing. Electrica</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Ing. Mecanica</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Ing. Electromecanica</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Contador Publico</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Ing. Sistemas Comp.</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Ing. Informatica</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Ing. Mecatronica</p>
              </div>
            </div>
          </li>
          <li className={classnames(style.contOpcion, style.subMenu)}>
            <div className={style.opcion}>
              <FontAwesomeIcon icon={faConciergeBell} />
              <p className={style.txtBtn}>Servicios</p>
            </div>
            <div className={style.subOpcion}>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Baja definitiva</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Baja Temporal</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Solicitud examen de ingles</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Curso de verano</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Traslados</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Cambio de carrera</p>
              </div>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Solicitud de convalidación</p>
              </div>
            </div>
          </li>
          <li className={style.contOpcion}>
            <div className={style.opcion}>
              <FontAwesomeIcon icon={faUserTie} />
              <p className={style.txtBtn}>Residencia Profesional</p>
            </div>
          </li>
          <li className={classnames(style.contOpcion, style.subMenu)}>
            <div className={style.opcion}>
              <FontAwesomeIcon icon={faQuestion} />
              <p className={style.txtBtn}>
                Coordinación de apoyo a la titulación
              </p>
            </div>
            <div className={style.subOpcion}>
              <div className={style.opcion}>
                <p className={style.txtBtn}>Opciones</p>
              </div>
            </div>
          </li>
        </div>
      </ul>
      <span className={style.btnMenu} onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} />
      </span>
    </nav>
  );
}

export default Menu;
