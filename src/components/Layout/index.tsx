import Header from '@components/Header';
import React from 'react';
import { GlobalStyle, Container } from './style';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        { children }
      </Container>
    </>
  )
};

export default Layout;
