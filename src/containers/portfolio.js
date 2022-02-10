import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styled from "styled-components/macro";

const Header = styled.p`
  align-item: center;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  word-spacing: 8px;
  color: black;
  width: auto;
  padding-top: 25px;
  padding-bottom: 25px;
`;

const Title = styled.p`
  margin: 0px 0px 0px 0px;
  color: #666462;
  font-size: 1.33rem;
  text-align: justify;
  font-weight: 900;
  width: 90%;
  &:hover {
    color: blue;
  }
`;

const SubTitle = styled.p`
  margin: 0px 0px 0px 0px;
  color: black;
  font-size: 1.53rem;
  text-align: center;
  font-weight: 900;
  opacity: 70%;
  text-shadow: 0px 1px, 1px 0px, 1px 1px;
  width: 100%;
`;

const PriceTitle = styled.h3`
  position: absolute;
  display: contents;
  color: black;
  font-weight: 700;
`;

const Container = styled.div`
  font-weight: 700;
  text-align: center;
  // align-items: center;
  border-top: 1px solid black;
  height: fit-content;
`;

const options = {
  margin: 20,
  responsiveClass: true,
  nav: false,
  dots: false,
  loop: true,
  smartSpeed: 1000,
  center: false,
  repeat: false,
  autoHeight: false,
  responsive: {
    0: {
      items: 1,
    },
    300: {
      items: 2,
      stagePadding: 10,
      margin: 10,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
      stagePadding: 100,
      margin: 100,
    },
  },
};

export function Portfolio() {
  return (
    <Container>
      <Header>Популярное оборудование</Header>
      <OwlCarousel
        {...options}
        style={{ cursor: "pointer", height: "fit-content" }}
      >
        <div class="item">
          <PriceTitle> От 2300$ /шт. </PriceTitle>
          <img
            style={{
              objectFit: "cover",
              borderRadius: "35px",
            }}
            src="../images/equipment/solis_30.png"
            alt="Equipment_invertor"
          />
          <SubTitle>Сетевой инвертор SOLIS 5G 30 кВт</SubTitle>
        </div>
        <div class="item">
          <PriceTitle> От 2280€ /шт. </PriceTitle>
          <img
            style={{
              objectFit: "cover",
              borderRadius: "35px",
            }}
            src="../images/equipment/huawei_30.png"
            alt="Equipment_invertor"
          />
          <SubTitle>Сетевой инвертор HUAWEI SUN2000-30KTL 30 кВт</SubTitle>
        </div>
        <div class="item">
          <PriceTitle> От 161$ /шт. </PriceTitle>

          <img
            style={{
              objectFit: "cover",
              borderRadius: "35px",
            }}
            src="../images/equipment/leapton_400.png"
            alt="Equipment_solar"
          />
          <SubTitle>Солнечные панели Leapton 400 Вт</SubTitle>
        </div>
        <div class="item">
          <PriceTitle> От 225$ /шт. </PriceTitle>
          <img
            style={{
              objectFit: "cover",
              borderRadius: "35px",
            }}
            src="../images/equipment/risen_540.png"
            alt="Equipment_solar"
          />
          <SubTitle>Солнечные панели Risen 540 Вт</SubTitle>
        </div>
      </OwlCarousel>
      <Header>Премиум оборудование - залог качественной генерации!</Header>
    </Container>
  );
}

export default Portfolio;
