import styled, { createGlobalStyle, keyframes } from 'styled-components';

const LoadingAnimation = keyframes`
    30% {
        margin-top: 50vh;
    };

    35% {
        margin-top: 49vh;
    };

    50% {
        margin-top: 48vh;
    };

    65% {
        margin-top: 49vh;
    };

    70% {
        margin-top: 50vh;
    };
`;

const Loading = styled.p`
    display: block;

    color: white;
    font-size: 36px;
    font-style: italic;
    margin-top: 50vh;

    animation: ${LoadingAnimation} 750ms linear ${ props => props.delay ? props.delay * props.index + 'ms' : '0ms' } infinite;
`;

const LoadingContainer = styled.div`
    display: flex;

    width: 100%;
    justify-content: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #1B1F21;
  };
`;

export {
    GlobalStyle,
    LoadingContainer,
    Loading,
};