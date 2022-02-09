import React, { useState } from "react";
import { MainPage, OptForm } from "../components";
import "./styles/main.css";
import ReactiveButton from "reactive-button";
import NumberFormat from "react-number-format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBomb,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
const { TelegramClient } = require("messaging-api-telegram");

export function CustomFormContainer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerText, setCustomerText] = useState("");
  const [customerName, setCustomerName] = useState("");
  const client = new TelegramClient({
    accessToken: "1961820796:AAGwFtKssjaFqL2FyBpbjbwFZCQNjy2YUMA",
  });

  const IsInvalid = phoneNumber === "";

  const sendMessage = (event) => {
    event.preventDefault();
    console.log({ phoneNumber, customerText, customerName });
    client.sendMessage(
      -511011465,
      { phoneNumber, customerName, customerText },
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
      <MainPage.ContainConsultation>
        <div className="get__help" id="contacts">
          Получить персональный расчёт
        </div>
        <img
          className="main__calc"
          src="../images/free-consultation.png"
          alt="consultation"
        />
        <OptForm onSubmit={sendMessage} method="POST">
          <OptForm.Input />
          <NumberFormat
            format="+38 (###) ###-####"
            placeholder="+38 (___) ___-__-__"
            mask="_"
            value={phoneNumber}
            onChange={({ target }) => setPhoneNumber(target.value)}
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
            idleText={"ЗАКАЗАТЬ ЗВОНОК"}
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
              height: "60px",
              borderRadius: "4px",
              background: "#6bb6ce",
              color: "white",
              display: "flex",
              fontSize: "16px",
              fontWeight: "bold",
              alignItems: "center",
              padding: "16px",
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
        </OptForm>
        <OptForm.Break />
        <div className="willCall">
          Наш специалист свяжется с вами в течение 15 минут.
        </div>
        <div
          style={{
            color: "black",
            fontSize: "2rem",
            alignItems: "center",
            fontWeight: "bold",
            textAlign: "center",
            wordSpacing: "8px",
            margin: "15px 0px 0px 0px",
          }}
        >
          Наши партнёры
        </div>
      </MainPage.ContainConsultation>
    </>
  );
}
