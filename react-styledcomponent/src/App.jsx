import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Button>Hello</Button>
        <Button danger>Hello</Button>
        <Anchor href="http://google.com">Google</Anchor>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: lightblue;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  background-color: ${(props) => (props.danger ? "red" : "blue")};
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export default App;
