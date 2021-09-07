import React from "react";
import { MainPage } from "../components";
import { PartnersContainer } from "./main-page";
import "bootstrap/dist/css/bootstrap.min.css";

export function PartnersContainer1() {
  return (
    <MainPage.ContainPartners>
      <section class="section section-default mt-none mb-none">
        <div class="container">
          <h2 class=".bg-secondary mb-sm">
            Наши <strong>Партнёры</strong>
          </h2>
          <strong>
            <div class="row">
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img alt="" src="../images/partners/altek.png" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img alt="" src="../images/partners/belaz.png" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img alt="" src="../images/partners/dtek.png" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img alt="" src="../images/partners/elvorti.png" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img alt="" src="../images/partners/energorinok.png" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img alt="" src="../images/partners/huawei.png" />
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="square-holder">
                  <img alt="" src="../images/partners/wog.png" />
                </div>
              </div>
            </div>
          </strong>
        </div>
      </section>
    </MainPage.ContainPartners>
  );
}
