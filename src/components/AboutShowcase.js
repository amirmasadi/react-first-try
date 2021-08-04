import React from "react";
import PText from "./PText";
import MyH2 from "./MyH2";
import MyBtn from "./MyBtn";
import AboutPic from "../assets/images/about-page-img.jpg";


export default function AboutShowcase() {
  return (
    <section className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-5 gap-md-0">
      <div className="d-flex flex-column align-items-start">
        <PText>امیر اسدی هستم</PText>
        <MyH2 className="mb-5">فریلنسر حوضه وب</MyH2>
        <PText textPos="text-right">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          متنوع با هدت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان
          را می طلبد
          <br></br>
          <br></br>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
          <br></br>
          <br></br>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
          <br></br>
          <br></br>
        </PText>
        <MyBtn btnLink="/about" btnText="دانلود رزومه" />
      </div>
      <div className="d-flex justify-content-center">
        <img
          src={AboutPic}
          className="img-fluid w-75 border border-3 border-secondary rounded "
          alt="about-img"
        />
      </div>
    </section>
  );
}
