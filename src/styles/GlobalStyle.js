import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
    box-sizing: border-box;
  }
  
  body {
    font-family: Noto Sans KR, -apple-system, "system-ui", BlinkMacSystemFont,
      Apple SD Gothic Neo, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    text-size-adjust: 100%;
  }
  
  main {
    min-height: 800px;
  }
  
  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  
  img {
    max-width: 100%;
  }
  
  hr {
    border: none;
    margin: 0;
    display: block;
  }
  
  button {
    border: 0;
    cursor: pointer;
  }
  
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    line-height: 1;
  }
  
  .btn.is-rounded {
    border-radius: 290486px;
  }
  
  .box {
    background-color: #fff;
    border-radius: 4px;
    color: #333;
  }
  
  .container {
    max-width: 1200px;
    position: relative;
    margin: 0 auto;
  }
  
  .content {
    word-break: break-word;
    position: relative;
  }
  
  .input {
    display: flex;
    align-items: center;
    color: #5f5f5f;
    height: auto;
    cursor: text;
    background-color: rgb(246, 246, 246);
  }
  
  input:focus {
    outline: none;
  }
  
  .icon {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .title {
    font-weight: 600;
    word-break: break-word;
  }
  
  .card {
    max-width: 100%;
    position: relative;
  }
  
  .card-image {
    position: relative;
  }
  
  .tags {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  
  .tags .tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #454545;
    font-size: 0.75rem;
    height: 2em;
    padding: 0 0.75em;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .select {
    display: inline-block;
    max-width: 100%;
    position: relative;
  }
  
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }
  
  .select select {
    cursor: pointer;
    max-width: 100%;
    outline: none;
    position: relative;
    z-index: 2;
  }
  
  .select::after {
    display: block;
    content: " ";
    border: 3px solid #333;
    height: 0.625rem;
    width: 0.625rem;
    margin-top: -7px;
    z-index: 4;
    position: absolute;
    top: 50%;
    right: 1.125rem;
    box-sizing: border-box;
    border-top: 0;
    border-right: 0;
    transform: rotate(-45deg);
    transform-origin: center;
    cursor: pointer;
  }

  .is-hidden{
    display:none !important;
  }

  .swiper-container {
    margin: 0 auto;
    overflow: hidden;
    z-index: 1;
    position: relative;
    height: 100%;
  }
  
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: content-box;
    z-index: 1;
  }
  
  .swiper-slide {
    height: 100%;
    width: 100%;
    position: relative;
  }
  
  
`;

export default GlobalStyle;
