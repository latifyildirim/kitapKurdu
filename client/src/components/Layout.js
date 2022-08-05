import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* min-height: 100vh; */
  background-color: white;
  color: black;
`;
const Main = styled.div`
  margin: 50px 0px;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}