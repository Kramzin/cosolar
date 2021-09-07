import React, { Component } from "react";
import mainData from "../fixtures/mainpage.json";
import { MainPage, Header, OptForm, Feature } from "../components";
import "./main.css";
import { FooterContainer } from "../containers/footer";
import { PartnersContainer1 } from "../containers/partners";
import { CarouselContainer } from "./owl-carousel";
import { CarouselContainer1 } from "./owl-carousel1";

export function MainPageContainer() {
  return (
    <>
      <MainPage.Container>
        <MainPage.Contain>
          <div className="layer2" />
          <div className="spacer layer1">
            {/* <div class="spacer layer1"></div> */}
            <div className="main"> Построить СЭС легко вместе с CoSolar!</div>
            <div className="row__custom">
              <img className="main__img" src="../images/house.png" alt="" />
              <div className="options__div"> </div>
              <div className="main__options">
                <img
                  className="img__options"
                  src="../images/house_brands.png"
                />
                Предоставим на выбор оборудование более 40 проверенных мировых
                брендов!
              </div>
              <div className="main__options">
                <img
                  className="img__options"
                  src="../images/house_installation.png"
                />
                Сделаем монтаж согласно евро-стандарту квалифицированной
                командой специалистов и инженеров!
              </div>
              <div className="main__options">
                <img
                  className="img__options"
                  src="../images/house_documents.png"
                />
                Оформим все документы, и подключим «зеленый» тариф в оговореный
                законом срок!
              </div>
              <div className="main__options">
                <img
                  className="img__options"
                  src="../images/house_service.png"
                />
                Выполним профессиональное сервисное обслуживание в течение
                указанного в договоре срока!
              </div>
              <div className="main__options">
                <img
                  className="img__options"
                  src="../images/house_accident.png"
                />
                По вызову организуем выезд специалиста на Ваш объект!
              </div>
            </div>
          </div>
        </MainPage.Contain>
        <div className="main__variants">
          Постройте собственную СЭС с нами всего <strong> за 4 шага! </strong>
        </div>
        <MainPage>
          <MainPage.Pane>
            <MainPage.SubTitle>
              Консультация с нашим специалистом. Определение наилучшего варианта
              для ваших нужд.
            </MainPage.SubTitle>
            <MainPage.Image src="../images/step_1.png" alt="" />
          </MainPage.Pane>
          <MainPage.Pane>
            <MainPage.SubTitle>
              Подбор и закупка оборудования.
            </MainPage.SubTitle>
            <MainPage.Image src="../images/step_2.png" alt="" />
          </MainPage.Pane>
          <MainPage.Pane>
            <MainPage.SubTitle>
              Монтаж оборудования и запуск станции.
            </MainPage.SubTitle>
            <MainPage.Image src="../images/step_3.png" alt="" />
          </MainPage.Pane>
          <MainPage.Pane>
            <MainPage.SubTitle>Оформление «зеленого» тарифа</MainPage.SubTitle>
            <MainPage.Image src="../images/step_4.png" alt="" />
          </MainPage.Pane>
        </MainPage>
        <div className="main__variants">Строительство станций на цинке</div>
        <MainPage>
          <CarouselContainer />
        </MainPage>
        <div className="main__variants">
          Строительство станций на чёрном металле
        </div>
        <MainPage>
          <CarouselContainer1 />
        </MainPage>
        <MainPage.ContainConsultation>
          <div className="get__help">Получить персональный расчёт.</div>
          <img className="main__calc" src="../images/free-consultation.png" />
          <OptForm>
            <OptForm.Input placeholder="Ваш номер телефона" />
            <OptForm.Button>Позвоните мне</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Наш специалист свяжется с вами в течение 15 минут.
            </OptForm.Text>
          </OptForm>
        </MainPage.ContainConsultation>
        <MainPage>
          <PartnersContainer1 />
        </MainPage>
      </MainPage.Container>
      <div className="footer__container">
        <FooterContainer />
      </div>
    </>
  );
}
