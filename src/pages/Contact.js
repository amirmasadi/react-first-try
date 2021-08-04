import React from "react";
import Contactitems from "../components/Contactitems";
import SecHeading from "../components/SecHeading";
import MapImg from "../assets/images/map.jpg";
import styled from "styled-components";
import MyH2 from "../components/MyH2";
import PText from "../components/PText";
import ContactForm from "../components/ContactForm";
import TransitionAnimation from "../components/TransitionAnimation";

const ContactStyle = styled.section`
  .map-sec {
    background-image: url(${MapImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;

    & > div {
      position: absolute;
      background-color: var(--deep-dark);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 30px;
      border-radius: 12px;
      top: 40%;
      right: 27%;

      div {
        font-size: 2rem;
        position: absolute;
        top: -20px;
        right: 60px;
      }
    }
  }
`;

export default function Contact() {
  return (
    <div className="position-relative" style={{paddingTop:"200px"}}>
      <TransitionAnimation color="bg-secondary" delay="1.4" />
      <TransitionAnimation color="bg-light" delay="1.2" />
      <TransitionAnimation color="bg-dark" delay="1.1" />
      <ContactStyle>
        <div className="container">
          <SecHeading
            subText="درارتباط باشید"
            h3Text="تماس"
            headingPos="text-center"
          />
          <div className="d-flex flex-column flex-md-row align-items-start justify-content-around">
            <div className="w-100 p-1 p-md-5">
              <Contactitems icon="&#9742;" text="0912333444" />
              <Contactitems icon="&#9993;" text="amirmasadi@outlook.com" />
              <Contactitems icon="&#9872;" text="تهران، دماوند" />
            </div>
            <div className="w-100 p-1 p-md-5">
              <ContactForm />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="map-sec container-fluid position-relative">
          <div>
            <div>&#128204;</div>
            <MyH2>من اینجام</MyH2>
            <PText>تهران، دماوند</PText>
            <br />
            <a
              href="https://goo.gl/maps/BT4Rk5ighkocdjQT6"
              target="_blank"
              rel="noreferrer"
            >
              دیدن در نقشه
            </a>
          </div>
        </div>
      </ContactStyle>
    </div>
  );
}
