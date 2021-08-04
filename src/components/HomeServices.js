import React from "react";
import SecHeading from "../components/SecHeading";
import ServicesItems from "./ServicesItems";

export default function HomeServices() {
  return (
    <section className="container-lg" style={{marginTop:"200px"}}>
      <SecHeading
        h3Text="خدمات"
        subText="توانایی های قابل ارائه"
        headingPos="text-center"
      />
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-5 gap-md-0 mt-5">
        <ServicesItems
          itemIcon="&#10001;"
          itemTitle="طراحی دیجیتالی"
          itemText="و همچنین دستی در طراحی های دیجیتال مثل لوگو، بنر، گیف های تبلیغاتی، کاتالوگ و کلا کار با ادوبی فتوشاپ دارم. "
        />
        <ServicesItems
          itemIcon="&#128435;"
          itemTitle="توسعه سایت"
          itemText="من همچنین با استفاده از جدید ترین تکنولوژی های حوضه وب، سعی میکنم سایت هایی با بهترین سرعت و کارایی بنویسم."
        />
        <ServicesItems
          itemIcon="< >"
          itemTitle="وب دیزاین"
          itemText="طراحی ui/ux برای صفحات وب که به توسعه سایت های زیبا، خاص و بیش از پیش کاربردی کمک می کنه."
        />
      </div>
    </section>
  );
}
