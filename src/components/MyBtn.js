import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  .button,
  a {
    font-size: 1.3rem;
    background-color: ${(props) =>
      props.outline ? "transperant" : "var(--gray-1)"};
    padding: 0.5em 1.7em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? "var(--gray-1)" : "var(--deep-dark)")};
    transition: all 0.3s ease;

    &:hover{
      opacity: 0.9 ;
      transition: all 0.3s ease;
  }
  }
  @media only screen and (max-width: 768px) {
    .button,
    a {
      font-size: 1rem;
    }
  }
`;

export default function MyBtn({
  outline,
  btnLink,
  btnText = "دکمه تست",
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper ">
 
        <Link className="button w-100 text-center" to={btnLink}>
          {btnText}
        </Link>

    </ButtonStyle>
  );
}
