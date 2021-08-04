import React from "react";
import AboutShowcase from "../components/AboutShowcase";
import AboutSkills from "../components/AboutSkills";
import DownloadCv from "../components/DownloadCv";
import TransitionAnimation from "../components/TransitionAnimation";

export default function About() {
  return (
    <div className="position-relative" style={{paddingTop:"200px"}}>
      <TransitionAnimation color="bg-secondary" delay="1.4" />
      <TransitionAnimation color="bg-light" delay="1.2" />
      <TransitionAnimation color="bg-dark" delay="1.1" />
      <section>
        <AboutShowcase />
        <AboutSkills />
        <br />
        <br />
        <br />
        <br />
        <br />
        <DownloadCv />
      </section>
    </div>
  );
}
