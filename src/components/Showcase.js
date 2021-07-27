import React from "react";
import styled from "styled-components";
import showcaseImg from "../assets/images/hero.png";
import MyBtn from "./MyBtn";
import PText from "./PText";
import SocialArrow from "../assets/images/social-media-arrow.svg";
import ScrollArrow from "../assets/images/scroll-down-arrow.svg";

const ShowcaseStyle = styled.section`
  height: 90vh;
  position: relative;

  .social-part{
    position: absolute;
    transform: rotate(-90deg);
    bottom: 115px;
    left: -75px;

      img{
        transform: rotate(90deg);
      }
      a{
          color: var(--gray-1)
      }

  }

  .scroll-part{
    position: absolute;
    transform: rotate(-90deg);
    bottom: 4rem;
    right: -16px;

      img{
        transform: rotate(90deg);
        width: 17px;
      }
      a{
        color: var(--gray-1)
    }

  }

  .show-case-content {
    .show-case-title {
      margin-bottom: -50px;
      z-index: 1;

      h2 {
        font-size: 4.5rem;
        text-shadow: 0px 0px 20px black;
      }
      @media only screen and (max-width: 768px) {
          h2 {
              font-size: 3rem;
            }
      }

    }
    .show-case-text{
        margin-top: -200px;
    }
    @media only screen and (max-width: 768px) {
        .show-case-text{
            margin-top: 30px;
        }
    }
`;

export default function Showcase() {
  return (
    <ShowcaseStyle className="w-100  mt-5 text-white">
      <div className="show-case-content container h-100 d-flex justify-content-md-center align-items-center flex-column mt-sm-5">
        <div className="d-flex flex-column align-items-center show-case-title">
          <span className="fs-2">خوش اومدی</span>
          <h2>امیر اسدی</h2>
        </div>
        <img
          className="img-fluid border border-3 border-muted border rounded-1"
          src={showcaseImg}
          alt="showcase_image"
        />

        <div className="d-flex flex-column align-items-center show-case-text">
          <PText textPos="text-center">
            من به مدت 4 سال به عنوان یک طراح و توسعه دهنده وب مستقل کار می کنم.
            من عاشق طراحی و ایجاد تجارب وب جدید برای مردم هستم من به مدت 4 سال
            به عنوان یک طراح و توسعه دهنده وب مستقل کار می کنم.
          </PText>
          <MyBtn
            btnText={"نمونه کار ها"}
            outline={false}
            btnLink={"/projects"}
          ></MyBtn>
        </div>
      </div>

      <div className="social-part d-flex align-items-center">
        <span className="me-4 ">تماس</span>
        <img src={SocialArrow} alt="" />
        <a href="/" className="ms-5 ">لینکدین</a>
        <a href="/" className="ms-3 ">رزومه</a>
      </div>

      <div className="scroll-part d-flex align-items-center">
        <a href="#home-about" className="me-5 ">اسکرول</a>
        <img src={ScrollArrow} alt="" />
      </div>
    </ShowcaseStyle>
  );
}
