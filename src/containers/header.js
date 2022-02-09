import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import "./styles/main.css";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Solar Inn." />
        <div className="nav__menu">
          <div className="menu__item">
            <a className="menu__item" href="#">
              ГЛАВНАЯ
            </a>
          </div>
          <div className="menu__item">
            <a className="menu__item" href="#useful-info">
              ПОЛЕЗНАЯ ИНФОРМАЦИЯ
            </a>
          </div>
          <div className="menu__item">
            <a className="menu__item" href="#construction-types">
              ТИПЫ СТАНЦИЙ
            </a>
          </div>
          <div className="menu__item">
            <a className="menu__item" href="#contacts">
              НАПИШИТЕ НАМ
            </a>
          </div>
          <div className="menu__item">
            <a className="menu__item" href="#portfolio">
              НАШИ РАБОТЫ
            </a>
          </div>
        </div>
        <Header.AddressMobile>
          +38(093) 010-01-05 <br></br> +38(073) 010-01-05
        </Header.AddressMobile>
      </Header.Frame>
      {children}
    </Header>
  );
}
