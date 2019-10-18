import React from "react";
import styled from "styled-components";
import Hamburger1 from "./Components/Hamburger1";
import Hamburger2 from "./Components/Hamburger2";
import Hamburger3 from "./Components/Hamburger3";
import Hamburger4 from "./Components/Hamburger4";
import Hamburger5 from "./Components/Hamburger5";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ghostwhite;
`;

const DemoContainer = styled.div`
  width: 30vw;
  height: 60vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function App() {
  return (
    <Wrapper className="App">
      <DemoContainer>
        <Hamburger1></Hamburger1>
        <Hamburger2></Hamburger2>
        <Hamburger3></Hamburger3>
        <Hamburger4></Hamburger4>
        <Hamburger5></Hamburger5>
      </DemoContainer>
    </Wrapper>
  );
}

export default App;
