import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./styles/owl-partners.css";

const styles = {
  margin: "20px 0px 20px 0px",
  height: "10vh",
  background: "white",
  padding: "0",
};
const options = {
  margin: 10,
  responsiveClass: true,
  nav: false,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
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

export function PartnersContainer1() {
  return (
    <OwlCarousel
      id="owl-demo"
      loop
      style={styles}
      {...options}
      items={4}
      margin={10}
      dots={false}
    >
      <div class="item">
        <img alt="" src="../images/partners/dtek.png" />
      </div>
      <div class="item">
        <img alt="" src="../images/partners/huawei.png" />
      </div>
      <div class="item">
        <img alt="" src="../images/partners/belaz.png" />
      </div>
      <div class="item">
        <img alt="" src="../images/partners/elvorti.png" />
      </div>
      <div class="item">
        <img alt="" src="../images/partners/wog.png" />
      </div>
    </OwlCarousel>
  );
}
