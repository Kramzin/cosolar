import React from "react";
import "./styles/portfolio.scss";
import "bootstrap";
import $ from "jquery";
import styled from "styled-components/macro";

const Container = styled.div`
  font-weight: 700;
  text-align: center;
  border-top: 1px solid black;
  height: fit-content;
`;

const Header = styled.p`
  align-item: center;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  word-spacing: 8px;
  color: black;
  width: auto;
`;

export class Equipment extends React.Component {
  componentDidMount() {
    $(".option").click(function () {
      $(".option").removeClass("active");
      $(this).addClass("active");
    });
  }

  render() {
    return (
      <Container id="portfolio">
        <Header>Наши работы</Header>
        <div class="placeholder">
          <div class="options">
            <div
              class="option"
              style={{
                background: "url(../images/portfolio/work_dniepr.jpg) center",
              }}
            >
              <div class="shadow"></div>
              <div class="label">
                <div
                  class="icon"
                  style={{
                    content:
                      "url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Large_Coat_of_Arms_of_Dnipropetrovsk_Oblast.svg/1024px-Large_Coat_of_Arms_of_Dnipropetrovsk_Oblast.svg.png)",
                  }}
                >
                  <i class="fas fa-walking"></i>
                </div>
                <div class="info">
                  <div class="main">Днепр</div>
                  <div class="sub">30 МвТ</div>
                </div>
              </div>
            </div>
            <div
              class="option"
              style={{
                background: "url(../images/portfolio/work_odessa.jpg) center",
              }}
            >
              <div class="shadow"></div>
              <div class="label">
                <div
                  class="icon"
                  style={{
                    content:
                      "url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Coat_of_Arms_of_Odessa_%281999%29.svg/1200px-Coat_of_Arms_of_Odessa_%281999%29.svg.png)",
                  }}
                >
                  <i class="fas fa-snowflake"></i>
                </div>
                <div class="info">
                  <div class="main">Одесса</div>
                  <div class="sub">30 МвТ</div>
                </div>
              </div>
            </div>
            <div
              class="option active"
              style={{
                background:
                  "url(../images/portfolio/work_zaporizzha.jpg) center",
              }}
            >
              <div class="shadow"></div>
              <div class="label">
                <div
                  class="icon"
                  style={{
                    content:
                      "url(https://upload.wikimedia.org/wikipedia/commons/5/5c/Coat_of_Arms_of_Zaporizhzhya_Oblast.png)",
                  }}
                >
                  <i class="fas fa-tree"></i>
                </div>
                <div class="info">
                  <div class="main">Мелитополь</div>
                  <div class="sub">30 МвТ</div>
                </div>
              </div>
            </div>
            <div
              class="option"
              style={{
                background:
                  "url(../images/portfolio/work_melitopol.jpg) center",
              }}
            >
              <div class="shadow"></div>
              <div class="label">
                <div
                  class="icon"
                  style={{
                    content:
                      "url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Coat_of_Arms_of_Donetsk_Oblast_1999.svg/800px-Coat_of_Arms_of_Donetsk_Oblast_1999.svg.png)",
                  }}
                >
                  ><i class="fas fa-tint"></i>
                </div>
                <div class="info">
                  <div class="main">Мариуполь</div>
                  <div class="sub">30 МвТ</div>
                </div>
              </div>
            </div>
            <div
              class="option"
              style={{
                background:
                  "url(../images/portfolio/work_kharkiv.jpg) center no-repeat",
              }}
            >
              <div class="shadow"></div>
              <div class="label">
                <div
                  class="icon"
                  style={{
                    content:
                      "url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Coat_of_arms_of_Kharkiv_%28Ukrainian_Heraldry_Society%29.svg/1594px-Coat_of_arms_of_Kharkiv_%28Ukrainian_Heraldry_Society%29.svg.png)",
                  }}
                >
                  <i class="fas fa-sun"></i>
                </div>
                <div class="info">
                  <div class="main">Харьков</div>
                  <div class="sub">30 МвТ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default Equipment;
