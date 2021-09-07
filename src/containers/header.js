import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="CoSolar" />
        <Header.AddressMobile>
          +38(063) 279-75-15 <br></br> +38(095) 764-26-67
        </Header.AddressMobile>
        <Header.ButtonLink to={ROUTES.HOME}>
          <img className="callme__img" src="./images/house_installation.png" />{" "}
          Получить консультацию
        </Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
