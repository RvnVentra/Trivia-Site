import styled, { keyframes } from 'styled-components';

const QuestionAnswers = styled.button`
  background-color: inherit;
  border: 1px solid white;
  border-radius: 5px;


  color: white;
  width: 150px;
  height: 35px;

  transition: 300ms;

  &:hover, :focus {
    background-color: white;
    border: none;
    box-shadow: 0 0 30px white, inset 0 0 2px black;
    outline: none;

    color: #AFE3D6;
  };
`;

const QuestionAnswersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const QuestionHeader = styled.p`
  font-size: 24px;
  padding: 0px 15px;
`;

const QuestionContainer = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  color: white;
  text-align: center;
  width: 45%;
  height: 350px;
  margin: 0 auto;
`;

export {
  QuestionContainer,
  QuestionHeader,
  QuestionAnswersContainer,
  QuestionAnswers,
};