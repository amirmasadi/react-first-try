import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import projects from "../assets/data/projects";
import ProjectItems from "./ProjectItems";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

const ProjectSwiperStyle = styled.section`
  height: 600px;
  margin-bottom: 200px;

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function ProjectSwiper() {
  return (
    <ProjectSwiperStyle className="container-lg">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        className="mySwiper"
      >
        {projects.map((item, index) => {
          <SwiperSlide>
            <ProjectItems />
          </SwiperSlide>;
        })}
      </Swiper>
    </ProjectSwiperStyle>
  );
}
