import React from "react";
import styled from "styled-components";

export function Header() {
  return (
    <header>
      <Wrapper>
        <Logo>{"404Devs </>"}</Logo>
        <Nav>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Join Us</li>
        </Nav>
      </Wrapper>
    </header>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 40px;
  font-family: "Inconsolata", san-serif;
`;
const Nav = styled.nav`
  display: flex;
  font-family: 20px;
`;
