import React from "react";
import { Feature, OptForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { MainPageContainer } from "../containers/main-page";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Полный цикл установки и подключения солнечных станций по всей
            территории Украины.
          </Feature.Title>
          <Feature.SubTitle>Получить помощь в расчёте.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Ваш номер телефона" />
            <OptForm.Button>Позвоните мне</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Наш специалист свяжется с вами в течение 15 минут.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <MainPageContainer />
    </>
  );
}
