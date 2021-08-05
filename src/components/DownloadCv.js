import React from "react";
import styled from "styled-components";
import MyBtn from "./MyBtn";
import SecHeading from "./SecHeading";
import TopoPic from "../assets/images/topo-lines.png";
import CvBtn from "./CvBtn";


const DownloadCvStyle = styled.div`
  background-color: var(--deep-dark);
  border-radius: 12px;
  background-image: url(${TopoPic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default function DownloadCv() {
  return (
    <DownloadCvStyle className="container d-flex flex-column align-items-center py-5 w-100">
      <SecHeading
        h3Text="رزومه"
        subText="برای همکاری های بیشتر..."
        headingPos="text-center"
      />
      <CvBtn />
    </DownloadCvStyle>
  );
}
