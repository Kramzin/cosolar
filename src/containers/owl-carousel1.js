import React from "react";
import { MainPage } from "../components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
// чистокровный костыль

export function CarouselContainer1() {
  return (
    <OwlCarousel className="owl-theme full-slider" items="3" autoplay loop>
      <div className="item">
        <img src="../images/metal1.jpg" />
      </div>
      <div className="item">
        <img src="../images/metal2.jpg" />
      </div>
      <div className="item">
        <img src="../images/metal3.jpg" />
      </div>
      <div className="item">
        <img src="../images/metal4.jpg" />
      </div>
    </OwlCarousel>
  );
}
