import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    
  
  }

  body{
    background: #1A242F;
    color: #fff;
  }

  a{
    color: inherit;
  }

`;

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
      </>
    );
  }
}
