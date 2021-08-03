import React from "react";
import styled from "styled-components";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";

const ContactFormStyle = styled.form`
  label {
    color: var(--gray-1);
    font-size: 1.3rem;
    margin: 20px 0px;
  }
  input,
  textarea {
    width: 100%;
    background-color: var(--deep-dark);
    padding: 10px 10px 10px 30px;
    border-radius: 12px;
    outline: none;
    border: none;
    color: var(--gray-1);
    font-size: 21px;
  }
  button {
    font-size: 1.3rem;
    background-color: var(--gray-1);
    padding: 0.5em 1.7em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: var(--deep-dark);
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.9;
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

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xdoywgpa");
  return (
    <ContactFormStyle
      className="d-flex flex-column"
      onSubmit={handleSubmit}
      method="post"
    >
      <label htmlFor="name">
        اسم
        <input type="input" name="name" id="name" />
      </label>
      <label htmlFor="email">
        ایمیل
        <input type="email" name="email" id="email" />
      </label>

      <label htmlFor="email">
        متن پیام
        <textarea name="message" id="message" rows="6" />
      </label>

      <button type="submit" disabled={state.submitting}>
        ارسال
      </button>
      {(state.succeeded && <motion.p className="fs-5 bg-success p-3 my-4 rounded"
        animate={{opacity:0,
          transition:{
            delay: 9,
          }
        }}
      >تشکر... سعی میکنم در کمترین زمان ممکن جواب بدم. :)</motion.p>)}
    </ContactFormStyle>
  );
}
