import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import projects from "../assets/data/projects";
import ProjectItems from "./ProjectItems";
import SecHeading from "./SecHeading";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

const ProjectSwiperStyle = styled.div`
  height: 708px;
  margin-top: 100px;
  position: relative;

  .swiper-container {
    width: 100%;
    height: 696px;
  }

  .swiper-slide {
      width: 400px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;top
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: top;
    align-items: top;
  }

  .swiper-slide img {
    display: block;
  }

  .swiper-button-prev,
  .swiper-button-next{
    right: 10px;
    top: auto;
    bottom: 0px;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    padding: 28px;
    border-radius: 8px;
  }
  .swiper-button-next{
    right: 80px;
  }
`;

export default function ProjectSwiper() {
  return (
    <section >
      <SecHeading
        h3Text="پروژه ها"
        subText="برخی از نمونه کار ها"
        headingPos="text-center"
      />
      <ProjectSwiperStyle className="container-lg">
        <Swiper
          spaceBetween={30}
          navigation={true}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {projects.map(item => {
            return (
              <SwiperSlide key={item.id}>
                <ProjectItems
                  ptoImg={item.img}
                  proTitle={item.name}
                  proText={item.desc}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ProjectSwiperStyle>
    </section>
  );
}
