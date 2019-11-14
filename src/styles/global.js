import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Slabo+27px&display=swap");

*{
  -webkit-font-smoothing: antialiased !important; 
  margin: 0;
  padding: 0;
  font-size: 18px;
 }
  div{
   font-size: 1em;
 }
  html, body, #root {
   height: 100vh;  
  }
  #root{
   display: flex;
   justify-content: center;
   align-items: center;
  }
  body {
    background:  #009999;
  }
  a{
    text-decoration: none;
    color: #000000; 
  }
`;