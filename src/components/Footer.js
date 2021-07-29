import React from "react";
import styled from "styled-components";
import FooterList from "./FooterList";
import MyH2 from "./MyH2";
import PText from "./PText";

const FooterStyle = styled.section`
  background-color: var(--deep-dark);
  padding: 130px 0px 100px 0px;

  p{
    text-align: justify;
  }
`;

export default function Footer() {
  return (
    <FooterStyle className="container-fluid w-100 position-relative">
      <div className="w-75 d-flex flex-column flex-md-row justify-content-around align-items-baseline m-auto gap-5 gap-md-0">
        <div>
          <MyH2 className="mb-4 flex-grow-2 ">امیراسدی</MyH2>
          <PText textPos="text-right">
            من به مدت 4 سال به عنوان یک طراح و توسعه دهنده وب مستقل کار می کنم. من
            عاشق طراحی و ایجاد تجارب وب جدید برای مردم هستم من به مدت 4 سال به
            عنوان یک طراح و توسعه دهنده وب مستقل کار می کنم.
          </PText>
        </div>
          <FooterList footerli= {[
          {
            type: "link",
            text: "درباره من",
            path: "/about"
          }, {
            type: "link",
            text: "تماس با من",
            path: "/contact"
          }, {
            type: "link",
            text: "پروژه ها",
            path: "/project"
          }
          ]} >لینک های مهم
          </FooterList>

          <FooterList footerli= {[
          {
            type: "a",
            text: "09129994",
            path: "tel:+09129994"
          }, {
            type: "a",
            text: "amirmasadi@gmail.com",
            path: "mailto:amirmasadi@gmail.com"
          }, {
            type: "a",
            text: "تهران- دماوند",
            path: "https://goo.gl/maps/BT4Rk5ighkocdjQT6"
          }
          ]} >راه ای ارتباطی
          </FooterList>

          <FooterList footerli= {[
          {
            type: "a",
            text: "لینکدین",
            path: "/about"
          }, {
            type: "a",
            text: "پینترست",
            path: "https://www.pinterest.com/amirasadi2001/"
          }, {
            type: "a",
            text: "رزومه",
            path: "https://jobinja.ir/user/Amirasadi"
          }
          ]} >شبکه های اجتماعی
          </FooterList>
        </div>

        <div className="position-absolute bottom-0 p-2 w-100" style={{backgroundColor:"var(--dark-bg)"}}>
          <PText>&copy; 2021 امیراسدی </PText>
        </div>
    </FooterStyle>
  );
}
