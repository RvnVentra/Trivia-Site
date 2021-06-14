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

export {
    HomePage,
    HomeContentContainer,
    HomeContent,
    HomeNavigationContainer,
    HomeNavigationLinkRRD,
    HomeNavigationLink,
};