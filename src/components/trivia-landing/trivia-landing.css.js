import { Link } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const SubmitLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const SubmitButton = styled.button`
    display: block;
    background-color: #1B1F21;
    border: 1px solid white;
    border-radius: 5px;

    font-weight: bold;
    font-size: 15px;
    margin: -25px auto 0 auto;
    width: 160px;
    height: 33px;
    padding: 5px 0px;
    color: white;
    
    transition: background-color 250ms, opacity 1250ms;
    ${ props => props.disabled ? 'opacity: 0;' : '' }
    cursor: ${ props => props.disabled ? null : 'pointer' };

    &:active {
        opacity: 1;
    };

    &:hover, :focus {
        border: none;
        background-color: ${ props => props.disabled ? null : 'white' };

        color: ${ props => props.disabled ? null : 'black' };           
    };
`;

const LoadingAnimation = keyframes`
    from {
        opacity: 0;
    };

    to {
        opacity: 1;
    };
`;

const Title = styled.p`
    text-align: center;
    color: white;
    font-size: 50px;
    font-style: italic;
    margin-top: 200px;

    animation: ${LoadingAnimation} 1750ms ${ props => props.delay ? props.delay * props.index + 'ms' : '0ms' } infinite;
`;

const TitleContainer = styled.div`
    display: flex;

    justify-content: center;
    width: 100%;
`;

const HomeNav = styled(Link)`
    background-color: white;
    border-radius: 5px;
    display: block;
    opacity: 0.9;

    text-decoration: none;
    padding: 5px 0px;
    margin: 5px 5px 5px auto;
    width: 100px;
    height: 25px;
    text-align: center;
    transition: background-color 250ms;

    &:visited {
        color: black;
    };

    &:hover {
        border: 1px solid white;
        background-color: #1B1F21;

        color: white;
        width: 98px;
        height: 23px;
    };
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
    HomeNav,
    TitleContainer,
    Title,
    SubmitButton,
    SubmitLink,
};