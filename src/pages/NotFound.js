import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PText from "../components/PText";
import TransitionAnimation from "../components/TransitionAnimation";

const NotFoundstyle = styled.section`
  h1 {
    font-size: 10rem;
  }
  a {
    margin-top: 50px;
    font-size: 2rem;
  }
`;

export default function NotFound() {
  return (
    <div style={{paddingTop:"200px"}} className="position-relative"  >
      <TransitionAnimation color="bg-secondary" delay="1.4" />
      <TransitionAnimation color="bg-light" delay="1.2" />
      <TransitionAnimation color="bg-dark" delay="1.1" />
      <NotFoundstyle className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-muted">404</h1>
        <PText>صفحه مورد نظر پیدا نشد...</PText>
        <Link to="/">بازگشت به خانه</Link>
      </NotFoundstyle>
    </div>
  );
}
