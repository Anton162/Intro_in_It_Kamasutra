import React from "react";
import "./App.css";
import styled from "styled-components";
import { StyledBtn } from "./components/Button.styled";
import { Link } from "./components/Link.styled";
import { Menu } from "./components/Menu.styled";
import { myTheme } from "./styles/Theme.styled";

function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li>
            <a href="">menu item 1</a>
          </li>
          <li>
            <a href="">menu item 2</a>
          </li>
          <li>
            <a href="">menu item 3</a>
          </li>
        </ul>
      </Menu>

      <Box>
        {/* <StyledBtn color={"red"} fontSize={"20px"}>Button</StyledBtn>
        <StyledBtn color={"green"}>Button</StyledBtn>
        <StyledBtn fontSize={"30px"}>Button</StyledBtn>  */}

        <StyledBtn color={myTheme.colors.primary} primary active>
          Button
        </StyledBtn>
        <StyledBtn color={myTheme.colors.secondary} outlined>
          Button
        </StyledBtn>

        <StyledBtn as="a" href="#">
          Link
        </StyledBtn>
        <StyledBtn as={Link} href="#">
          LinkComponent
        </StyledBtn>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  button {
    cursor: pointer;
  }
  ${Link} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`;
