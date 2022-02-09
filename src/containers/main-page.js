import React from "react";
import { MainPage } from "../components";
import "./styles/main.css";
import { FooterContainer } from "../containers/footer";
import { PartnersContainer1 } from "../containers/partners";
import { CarouselContainer } from "./owl-carousel";
import { CustomFormContainer } from "./contact-form";
import { FaqsContainer } from "../containers/faqs";
import { Portfolio } from "../containers/portfolio";
import { Equipment } from "../containers/equipment.js";
import styled from "styled-components/macro";

const Paragraph = styled.p`
  font-size: 1.2rem;
  @media (max-width: 1300px) {
    width: fit-content;
    font-weight: 900;
    font-size: 1rem !important;
  }
`;

export function MainPageContainer() {
  return (
    <>
      <MainPage.Container>
        <MainPage.Contain>
          <div className="layer__header" />
          <div style={{ marginTop: "-60px" }} className="spacer layer__home">
            <div className="main" id="action1">
              Построить СЭС легко вместе с Solar Innovation group!
            </div>
            <div class="contain_main">
              <div class="row">
                <div
                  class="column__right"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  <div className="line">
                    <img
                      class="icon"
                      src="../images/house_brands.png"
                      alt="houseBrand"
                    />
                    <Paragraph>
                      Предоставим на выбор оборудование более 40 проверенных
                      мировых брендов!
                    </Paragraph>
                  </div>
                  <div className="line">
                    <img
                      class="icon"
                      src="../images/house_installation.png"
                      alt="houseInstallation"
                    />
                    <Paragraph>
                      Сделаем монтаж согласно евро-стандарту квалифицированной
                      командой специалистов и инженеров!
                    </Paragraph>
                  </div>
                  <div className="line">
                    <img
                      class="icon"
                      src="../images/house_documents.png"
                      alt="houseDocuments"
                    />
                    <Paragraph>
                      Оформим все документы и подключим «зелёный» тариф в
                      оговорённый законом срок!
                    </Paragraph>
                  </div>
                  <div className="line">
                    <img
                      class="icon"
                      src="../images/house_service.png"
                      alt="houseService"
                    />
                    <Paragraph>
                      Выполним профессиональное сервисное обслуживание в течение
                      указанного в договоре срока!
                    </Paragraph>
                  </div>
                  <div className="line">
                    <img
                      class="icon"
                      src="../images/house_accident.png"
                      alt="houseAccident"
                    />
                    <Paragraph>
                      По вызову организуем выезд специалиста на Ваш объект!
                    </Paragraph>
                  </div>
                </div>
                <div class="col-md-7">
                  <img class="house" src="../images/house.png" alt="house" />
                </div>
              </div>
            </div>
          </div>
        </MainPage.Contain>
        <MainPage id="construction-types">
          <CarouselContainer />
        </MainPage>
        <CustomFormContainer />
        <PartnersContainer1 />
        <Equipment />
        <Portfolio />
        <div className="main__variants" id="scrollMe">
          Постройте собственную СЭС с нами всего <strong> за 4 шага! </strong>
        </div>
        <MainPage>
          <MainPage.Pane>
            <MainPage.SubTitle>
              Консультация с нашим специалистом. Спецификация нужд.
            </MainPage.SubTitle>
            <MainPage.Image src="../images/step_1.png" alt="step1" />
          </MainPage.Pane>
          <MainPage.Pane>
            <MainPage.SubTitle>
              Подбор и закупка оборудования.
            </MainPage.SubTitle>
            <MainPage.Image src="../images/step_2.png" alt="step2" />
          </MainPage.Pane>
          <MainPage.Pane>
            <MainPage.SubTitle>
              Монтаж оборудования и запуск станции.
            </MainPage.SubTitle>
            <MainPage.Image src="../images/step_3.png" alt="step3" />
          </MainPage.Pane>
          <MainPage.Pane>
            <MainPage.SubTitle>Оформление «зеленого» тарифа</MainPage.SubTitle>
            <MainPage.Image src="../images/step_4.png" alt="step4" />
          </MainPage.Pane>
        </MainPage>
      </MainPage.Container>
      <div id="useful-info">
        <FaqsContainer />
      </div>
      <div className="footer__container">
        <FooterContainer />
      </div>
    </>
  );
}
