import React from "react";
import styled, { css } from "styled-components";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Input />
      </Container>
    </>
  );
};

const awesomeCard = css`
  background-color: pink;
  padding: 20px;
`;

const Input = styled.input.attrs({
  required: true,
})`
  border-radius: 5px;
  ${awesomeCard}
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: lightblue;
`;

export default App;
