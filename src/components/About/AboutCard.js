import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salom! Men <span className="purple"> Ridzhan Theez, </span>
           O‘zbekistonlik dasturchiman<br />
           Hozirda <span className="purple">A-School</span>da IT o‘qituvchisi sifatida ishlayman hamda mustaqil dasturchi sifatida faoliyat yuritaman.
            <br />
            <br />
           Dasturlashdan tashqari, men yoqtiradigan boshqa mashg‘ulotlar:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Kompyuter o‘yinlari o‘ynash
            </li>
            <li className="about-activity">
              <ImPointRight /> YouTube kanal yuritish
            </li>
            <li className="about-activity">
              <ImPointRight /> Sayohat qilish
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
           "Kod — bu mening tilim, loyiha — hikoyam!"{" "}
          </p>
          <footer className="blockquote-footer">Mr Ridzhan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
