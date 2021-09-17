import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Container>
        <Button>Hello</Button>
        <Button danger>Hello</Button>
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

export default App;
