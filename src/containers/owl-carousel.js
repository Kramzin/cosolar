import React from "react";
import { MainPage } from "../components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

export function CarouselContainer() {
  return (
    <OwlCarousel className="owl-theme full-slider" items="3" autoplay loop>
      <div className="item">
        <img src="../images/zinc1.jpg" />
      </div>
      <div className="item">
        <img src="../images/zinc2.jpg" />
      </div>
      <div className="item">
        <img src="../images/zinc3.jpg" />
      </div>
      <div className="item">
        <img src="../images/zinc4.jpg" />
      </div>
    </OwlCarousel>
  );
}
