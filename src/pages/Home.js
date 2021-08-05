import React from "react";
import HomeAbout from "../components/HomeAbout";
import HomeServices from "../components/HomeServices";
import ProjectSwiper from "../components/ProjectSwiper";
import Showcase from "../components/Showcase";
import HomeTestImonials from "../components/HomeTestImonials";
import DownloadCv from "../components/DownloadCv";
import TransitionAnimation from "../components/TransitionAnimation";
import { motion } from "framer-motion";

export default function Home() {
  return (
      <motion.div className="position-relative" exit={{opacity: 0}}>
        <TransitionAnimation color="bg-secondary" delay="1.4" />
        <TransitionAnimation color="bg-light" delay="1.2" />
        <TransitionAnimation color="bg-dark" delay="1.1" />
        <Showcase />
        <HomeAbout />
        <HomeServices />
        <ProjectSwiper />
        <HomeTestImonials />
        <DownloadCv />
      </motion.div>
  );
}
