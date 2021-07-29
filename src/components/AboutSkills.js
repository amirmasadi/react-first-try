import React from "react";
import SkillItems from "./SkillItems";

export default function AboutSkills() {
  return (
    <div className="mt-5 container ">
      <div>
        <h2
          style={{
            color: "var(--gray-1)",
            fontSize: "3rem",
            fontWeight: "bold",
            marginTop: "150px",
            marginBottom: "20px",
          }}
        >
          تحصیلات
        </h2>
        <SkillItems title="دانشگاه" items={["دانشگاه آزاد واحد دماوند"]} />
        <SkillItems title="رشته" items={[" مهندسی کامپیوتر"]} />
        <SkillItems title="مدرک" items={["دانشجوی کارشناسی پیوسته"]} />
      </div>
      
      <div>
        <h2
          style={{
            color: "var(--gray-1)",
            fontSize: "3rem",
            fontWeight: "bold",
            marginTop: "150px",
            marginBottom: "20px",
          }}
        >
          مهارت ها
        </h2>
        <SkillItems title="طراحی وب" items={["HTML", "CSS", "SASS", "BOOTSTRAP", "JS", "REACT"]} />
        <SkillItems title="طراحی دیجیتال" items={["photoshop", "adobe xd"]} />
      </div>
    </div>
  );
}
