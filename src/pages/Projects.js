import React from "react";
import SecHeading from "../components/SecHeading";
import ProjectPageSec from "../components/ProjectPageSec";
import TransitionAnimation from "../components/TransitionAnimation";

export default function Progects() {
  return (
    <div className="position-relative" style={{paddingTop:"200px"}}>
      <TransitionAnimation color="bg-secondary" delay="1.4" />
      <TransitionAnimation color="bg-light" delay="1.2" />
      <TransitionAnimation color="bg-dark" delay="1.1" />

      <section className="container">
        <SecHeading
          h3Text="پروژه ها"
          subText="برخی از نمونه کار ها"
          headingPos="text-center"
        />
        <ProjectPageSec />
      </section>
    </div>
  );
}
