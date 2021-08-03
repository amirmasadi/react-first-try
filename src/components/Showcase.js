import React from "react";
import styled from "styled-components";
import showcaseImg from "../assets/images/hero.png";
import MyBtn from "./MyBtn";
import PText from "./PText";
import MyH2 from "./MyH2";
import SocialArrow from "../assets/images/social-media-arrow.svg";
import ScrollArrow from "../assets/images/scroll-down-arrow.svg";
import { motion, Variants } from "framer-motion";

const ShowcaseStyle = styled.section`
  height: 90vh;
  position: relative;
  
  .social-part{
    position: absolute;
    transform: rotate(-90deg);
    bottom: 115px;
    left: -75px;

      img{
        transform: rotate(90deg)!important;
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
        transform: rotate(90deg) !important;
        width: 17px;
      }
      a{
        color: var(--gray-1)
    }

  }

  .show-case-content {
    .show-case-title {
      margin-bottom: -70px;
      z-index: 1;

      .showcase-title {
        font-size: 6.5rem;
        text-shadow: 0px 0px 20px black;
      }
      @media only screen and (max-width: 768px) {
          h2 {
              font-size: 1.5rem;
            }
            .showcase-title {
              font-size: 3rem;
            }
      }

    }
    .show-case-text{
        margin-top: -200px;
        z-index: 1;
    }
    @media only screen and (max-width: 768px) {
        .show-case-text{
            margin-top: 30px;
        }
    }
`;

const parentMotion: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childMotion: Variants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Showcase() {
  return (
    <ShowcaseStyle className="w-100  mt-5 text-white">
      <div className="show-case-content container h-100 d-flex justify-content-md-center align-items-center flex-column mt-sm-5">
        <div className="d-flex flex-column align-items-center show-case-title">
          <MyH2
            className=""
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
          >
            خوش اومدی
          </MyH2>
          <motion.h2
            className="showcase-title"
            initial={{ opacity: 0, y: -150 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.5 },
            }}
          >
            امیر اسدی
          </motion.h2>
        </div>
        <div
          style={{ width: "	485", height: "304" }}
          className="position-relative showcaseImg"
        >
          <img
            className="img-fluid border border-3 border-muted rounded-1"
            src={showcaseImg}
            alt="showcase_image"
          />
          <motion.div
            className="position-absolute bg-dark top-0 w-0 h-100"
            initial={{ width: "100%", left: "0%" }}
            animate={{
              width: "0%",
              left: "100%",
              transition: {
                duration: 0.2,
                delay: 0.5,
              },
            }}
          ></motion.div>
          <motion.div
            className="position-absolute bg-secondary top-0 w-0 h-100"
            initial={{ width: "100%", left: "0%" }}
            animate={{
              width: "0%",
              left: "100%",
              transition: {
                duration: 0.3,
                delay: 0.2,
              },
            }}
          ></motion.div>
          <motion.div
            className="position-absolute bg-light top-0 w-0 h-100"
            initial={{ width: "100%", left: "0%" }}
            animate={{
              width: "0%",
              left: "100%",
              transition: {
                duration: 0.3,
                delay: 0.1,
              },
            }}
          ></motion.div>
        </div>

        <div className="d-flex flex-column align-items-center show-case-text">
          <PText
            textPos="text-center"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
          >
            من به مدت 4 سال به عنوان یک طراح و توسعه دهنده وب مستقل کار می کنم.
            من عاشق طراحی و ایجاد تجارب وب جدید برای مردم هستم من به مدت 4 سال
            به عنوان یک طراح و توسعه دهنده وب مستقل کار می کنم.
          </PText>
          <MyBtn
            btnText={"نمونه کار ها"}
            outline={false}
            btnLink={"/projects"}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
          ></MyBtn>
        </div>
      </div>

      <motion.div
        className="social-part d-flex align-items-center"
        variants={parentMotion}
        initial="initial"
        animate="animate"
      >
        <motion.span className="me-4 " variants={childMotion}>
          تماس
        </motion.span>
        <motion.img src={SocialArrow} alt="" variants={childMotion} />
        <motion.a
          href="/"
          targrt="_blank"
          className="ms-5 "
          variants={childMotion}
        >
          LI
        </motion.a>
        <motion.a
          href="https://jobinja.ir/user/Amirasadi"
          target="_blank"
          className="ms-3 "
          rel="noreferrer"
          variants={childMotion}
        >
          CV
        </motion.a>
        <motion.a
          href="https://pin.it/6Zikgxd"
          target="_blank"
          className="ms-3 "
          rel="noreferrer"
          variants={childMotion}
        >
          PIN
        </motion.a>
      </motion.div>

      <motion.div
        className="scroll-part d-flex align-items-center"
        variants={parentMotion}
        initial="initial"
        animate="animate"
      >
        <motion.a href="#home-about" className="me-5 " variants={childMotion}>
          اسکرول
        </motion.a>
        <motion.img src={ScrollArrow} alt="" variants={childMotion} />
      </motion.div>
    </ShowcaseStyle>
  );
}
