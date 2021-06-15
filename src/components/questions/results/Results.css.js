import styled from 'styled-components';

const ViewAnswers = styled.button`
    border: 1px solid white;
    border-radius: 5px;
    background-color: inherit;

    color: white;
    width: 150px;
    height: 30px;
    cursor: pointer;
    transition: 400ms;

    :hover, :active {
        border: 1px solid black;
        background-color: white;
        color: black;
    };
`;

const ResultText = styled.p`
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 45vw;
    height: 20vh;
`;

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;
`;

export {
    ResultsContainer,
    ResultText,
    ViewAnswers,
};