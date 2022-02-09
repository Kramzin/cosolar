import React, { useState } from "react";
import { Feature, OptForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { MainPageContainer } from "../containers/main-page";
import ReactiveButton from "reactive-button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberFormat from "react-number-format";
import {
  faCheckCircle,
  faBomb,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import "./menu.css";
import "./page.css";
import { slide as Menu } from "react-burger-menu";

const { TelegramClient } = require("messaging-api-telegram");

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerText, setCustomerText] = useState("");
  const [customerName, setCustomerName] = useState("");
  const client = new TelegramClient({
    accessToken: "1961820796:AAGwFtKssjaFqL2FyBpbjbwFZCQNjy2YUMA",
  });

  const IsInvalid = phoneNumber === "";

  const sendMessage = (event) => {
    event.preventDefault();
    console.log("You submitted phone number.");
    client.sendMessage(
      -511011465,
      { phoneNumber },
      {
        disableWebPagePreview: true,
        disableNotification: true,
      }
    );
  };

  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  return (
    <>
      <HeaderContainer>
        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>
          <ul class="menu__box">
            <li>
              <a class="menu__item" href="#useful-info">
                Полезная информация
              </a>
            </li>
            <li>
              <a class="menu__item" href="#contacts">
                Связаться с нами
              </a>
            </li>
            <li>
              <a class="menu__item" href="#construction-types">
                Типы станций
              </a>
            </li>
          </ul>
        </div>
        <Feature>
          <div className="info__header">
            <Feature.Title>
              Хотите получить консультацию по вопросу строительства солнечной
              электростанции?
            </Feature.Title>
            <Feature.SubTitle>
              Оставляйте ваш номер телефона! Специалист свяжется с вами в
              ближайшее время.
            </Feature.SubTitle>
            <OptForm onSubmit={sendMessage} method="POST">
              <OptForm.Input />
              <NumberFormat
                format="+38 (###) ###-####"
                style={{ height: "70px" }}
                placeholder="+38 (___) ___-__-__"
                onChange={({ target }) => setPhoneNumber(target.value)}
                value={phoneNumber}
                mask="_"
                style={{
                  height: "60px",
                  border: "1px solid black",
                  marginBottom: "15px",
                }}
              />
              <OptForm.InputContacts
                format="####"
                placeholder="Ваше имя"
                value={customerName}
                onChange={({ target }) => setCustomerName(target.value)}
              />

              <OptForm.InputContacts
                placeholder="Ваш вопрос(опционально)"
                value={customerText}
                onChange={({ target }) => setCustomerText(target.value)}
              />
              <ReactiveButton
                buttonState={state}
                onClick={onClickHandler}
                onSubmit={sendMessage}
                method="POST"
                color={"red"}
                idleText={"ПОЗВОНИТЕ МНЕ"}
                loadingText={
                  <React.Fragment>
                    <FontAwesomeIcon icon={faCircleNotch} spin /> Отправка
                  </React.Fragment>
                }
                successText={
                  <React.Fragment>
                    <FontAwesomeIcon icon={faCheckCircle} /> Готово!
                  </React.Fragment>
                }
                errorText={
                  <React.Fragment>
                    <FontAwesomeIcon icon={faBomb} /> Error
                  </React.Fragment>
                }
                type={"submit"}
                className={"class1 class2"}
                style={{
                  height: "70px",
                  background: "#6bb6ce",
                  color: "white",
                  display: "flex",
                  fontSize: "26px",
                  alignItems: "center",
                  padding: "0 29px",
                }}
                outline={false}
                shadow={false}
                rounded={false}
                size={"large"}
                block={false}
                messageDuration={250000}
                disabled={IsInvalid}
                buttonRef={null}
                width={null}
                height={null}
                animation={true}
              />
              <OptForm.Break />
              <OptForm.Text>
                Наш специалист свяжется с вами в течение 15 минут.
              </OptForm.Text>
            </OptForm>
          </div>
        </Feature>
      </HeaderContainer>
      <MainPageContainer />
    </>
  );
}
