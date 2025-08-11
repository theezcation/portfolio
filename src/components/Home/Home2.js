import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> O‘ZIMNI  </span> TANISHTIRAMAN
            </h1>
            <p className="home-about-body">
             Men dasturlashga qiziqib, vaqt o‘tishi bilan bu sohada yetarli bilim va tajriba to‘pladim deb oylayman. 🤷‍♂️
              <br />
              <br />
              
              <i>
                <b className="purple"> Python, JavaScript va Java  </b>
              </i>
                kabi asosiy texnologiyalarni yaxshi bilaman.
              <br />
              <br />
             Asosiy qiziqishlarim — innovatsion veb texnologiyalar yaratish, &nbsp;
              <i>
                <b className="purple">foydali mahsulotlar ishlab chiqish</b> va{" "}
                <b className="purple">
                  Blockchain {" "}
                </b>
             sohasini o‘rganish.
              </i>
              <br />
              <br />
            Imkon bo‘lganda, ishtiyoqimni <i><b className="purple">Node.js</b></i> hamda <i> <b className="purple">React.js</b></i> va <i> <b className="purple">Next.js</b></i> kabi zamonaviy  <i><b className="purple">JavaScript</b></i> kutubxona va freymvorklari yordamida mahsulot yaratishga yo‘naltiraman.
              <br />
              <br />  
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>MEN BILAN BOG‘LANING</h1>
            <p>
              Istalgan payt  <span className="purple">aloqaga chiqishingiz mumkin </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/theezcation"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://youtube.com/@nuroon_code"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/theezcation"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/theezcation"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
