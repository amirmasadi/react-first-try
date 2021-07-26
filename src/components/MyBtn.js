import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
    .button {
    font-size: 1.3rem;
    background-color: ${(props) =>
        props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.5em 1.7em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'var(--deep-dark)')};
    }
    @media only screen and (max-width: 768px) {
    .button {
        font-size: 1rem;
    }
    }
`;

export default function MyBtn(props) {
  return (
    <ButtonStyle outline={props.outline} className="button-wrapper">
        <Link className="button" to={props.btnLink}>
            {props.btnText}
        </Link>
    </ButtonStyle>
  );
}
