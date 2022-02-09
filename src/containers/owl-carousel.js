import React from "react";
import "./styles/owl-types-constructions.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styled from "styled-components/macro";

const styles = {
  borderTop: "4px solid black",
};

const options = {
  autoplay: true,
};

const ButtonLink = styled.a`
  color: black;
  text-decoration: none;
  padding: 6px 6px;
  &:hover {
    color: black;
  }
`;

export function CarouselContainer() {
  return (
    <div className="owl-carousel owl-theme" style={styles} {...options}>
      <div className="slide slide-1">
        <div className="slide-content">
          <h1>Конструкция из цинка</h1>
          <p>
            Вариант подороже, но более надёжный и требует меньше обслуживания.
          </p>
          <button>
            <ButtonLink href="#contacts">УЗНАТЬ ПОПОДРОБНЕЕ</ButtonLink>
          </button>
        </div>
      </div>
      <div className="slide slide-2">
        <div className="slide-content">
          <h1>Конструкция из чёрного металла</h1>
          <p>Менее затратный материал, но требует ежегодного обслуживания.</p>
          <button>
            <ButtonLink href="#contacts">УЗНАТЬ ПОПОДРОБНЕЕ</ButtonLink>
          </button>
        </div>
      </div>
      <div className="slide slide-3">
        <div className="slide-content">
          <h1>Нестандартная конфигурация</h1>
          <button>
            <ButtonLink href="#contacts">
              ПОЛУЧИТЬ ПЕРСОНАЛЬНУЮ КОНСУЛЬТАЦИЮ
            </ButtonLink>
          </button>
        </div>
      </div>
    </div>
  );
}
