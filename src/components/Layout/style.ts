import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
