import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const HomeNavigationLink = styled.a`
    background-color: #2E353B;
    border: 1px solid white;
    border-radius: 23px;

    text-align: center;
    text-decoration: none;
    width: 25%;

    :visited {
        color: #93B2C2;
    };

    :hover {
        color: #4276D7;
        text-decoration: underline;
        background-color: white;
    };
`;

const HomeNavigationLinkRRD = styled(Link)`
    background-color: #2E353B;
    border: 1px solid white;
    border-radius: 23px;

    text-align: center;
    text-decoration: none;
    width: 25%;

    :visited {
        color: #93B2C2;
    };

    :hover {
        color: #4276D7;
        text-decoration: underline;
        background-color: white;
    };
`;

const HomeNavigationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    margin-top: 30px;
    width: 70%;
    padding: 15px;
`;

const HomeContent = styled.p`
    width: ${ props => props.primary ? '72%' : '95%' };
    text-align: center;
`;

const HomeContentContainer = styled.div`
    background-color: #2E353B;
    border: 1px solid white;
    border-radius: 23px;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 70%;
    padding: 15px;
    color: #93B2C2;
`;

const HomePage = styled.div`
    height: 95vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  };
`;

export {
    GlobalStyle,
    HomePage,
    HomeContentContainer,
    HomeContent,
    HomeNavigationContainer,
    HomeNavigationLinkRRD,
    HomeNavigationLink,
};