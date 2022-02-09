import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import ReactiveButton from "reactive-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBomb,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
const { TelegramClient } = require("messaging-api-telegram");

export default function Signin() {
  const [phoneNumber, setphoneNumber] = useState("");
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
      332741467,
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
      <HeaderContainer />
      <Form>
        <Form.Title>Sign In</Form.Title>
        <Form.Base onSubmit={sendMessage} method="POST">
          <Form.Input
            placeholder="Ваш номер телефона*"
            value={phoneNumber}
            onChange={({ target }) => setphoneNumber(target.value)}
          />
          <Form.Input
            placeholder="Ваш текст(опционально)"
            value={customerText}
            onChange={({ target }) => setCustomerText(target.value)}
          />
          <Form.Input
            placeholder="Ваше имя"
            value={customerName}
            onChange={({ target }) => setCustomerName(target.value)}
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
              background: "#e50914",
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
        </Form.Base>
      </Form>
    </>
  );
}
