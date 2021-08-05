import React from "react";
import { Link, useParams } from "react-router-dom";
import PText from "./PText";
import projects from "../assets/data/projects";
import MyH2 from "./MyH2";
import { motion } from "framer-motion";

const parentMotion = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const childMotion = {
  initial: { y: 200, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ProjectDetails() {
  const { projId } = useParams();
  let projDetails = projects.find((i) => i.id === parseInt(projId, 10));

  return (
    <motion.div
      className="container"
      style={{ paddingTop: "150px" }}
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
    >
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-top">
        <Link to="/projects" className="text-white" style={{fontSize: "4rem"}}>&#215;</Link>
        <motion.div className="p-1 p-md-5" variants={parentMotion} initial={"initial"} animate={"animate"}>
          <motion.div className="mb-3" variants={childMotion}>
            <MyH2>{projDetails.name}</MyH2>
          </motion.div>
          <motion.div variants={childMotion}>
            <PText>{projDetails.desc}</PText>
          </motion.div>
          <motion.p className="text-muted mt-5 fs-5" variants={childMotion}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد،
            <br />
            <br /> در این صورت می توان امید داشت که تمام و دشواری موجود در ارائر
            زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
            موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
            نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
            دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
            گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
            که لازم است.
          </motion.p>
        </motion.div>
        <motion.img
          className="image-fluid rounded border border-2 border-secondary"
          style={{ maxWidth: "400px", objectFit: "cover" }}
          src={projDetails.img}
          alt=""
          initial={{ scale: 1.5, x: "40vw" }}
          animate={{
            x: 0,
            scale: 1,
            transition: {
              type: "tween",
              duration: 0.8,
            },
          }}
        />
      </div>
    </motion.div>
  );
}
