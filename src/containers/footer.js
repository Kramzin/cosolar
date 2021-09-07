import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Вопросы? Свяжитесь с нами.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <div className="footer__sub"> Адрес: </div>
          <Footer.Link href="#">
            490055 Украина, Днепропетровская область, г. Днепр, проспект
            Яворницкого 55
          </Footer.Link>
          <Footer.Link href="mailto:volzki2018@gmail.com">
            Email: volzki2018@gmail.com
          </Footer.Link>
          <Footer.Link href="http://telegram.me/kramzin">
            Telegram: @kramzin
          </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <div className="footer__sub"> Коммерческий отдел: </div>
          <Footer.Link href="#">‎+380 63 279 7515</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
    </Footer>
  );
}
