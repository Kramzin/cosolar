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
          +38(063) 279-75-15 <br></br> +38(073) 099-09-69
        </Header.AddressMobile>
      </Header.Frame>
      {children}
    </Header>
  );
}
