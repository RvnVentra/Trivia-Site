import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ReturnHome = styled(Link)`
    border: 1px solid white;
    border-radius: 5px;
    position: absolute;
    top: 15px;
    right: 15px;
    
    cursor: pointer;
    padding: 5px 25px;
    text-decoration: none;
    color: white;
    transition: 400ms;

    :hover, :active, :focus {
        border: 1px solid black;
        background: white;

        color: black;
    };
`;

const CorrectAnswersText = styled.p`
    color: green;
    margin-left: 30px;
`;

const SelectedAnswersText = styled.p`
    color: red;
    margin-left: 30px;
`;

const QuestionsText = styled.p`
    font-weight: bold;
`;

const AnswersContainer = styled.div`
    border: 1px solid white;

    margin-bottom: 15px;
    padding: 0px 35px;
    height: 400px;
    overflow-y: scroll;
`;

const ViewAnswers = styled.button`
    border: 1px solid white;
    border-radius: 5px;
    background-color: inherit;

    color: white;
    width: 200px;
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
    AnswersContainer,
    QuestionsText,
    SelectedAnswersText,
    CorrectAnswersText,
    ReturnHome,
};