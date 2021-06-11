import styled, { keyframes } from 'styled-components';

const ARROW_SIZE = '6';
const ARROW_CENTERING = ARROW_SIZE / 2 + 2;

const LeftArrowAnimation = keyframes`
  from {
    left: 13px;
  };

  to {
    left: 17px;
  };
`;
const RightArrowAnimation = keyframes`
  from {
    right: 13px;
  };

  to {
    right: 17px;
  };
`;

const Arrow = styled.i`
  border: 1px solid grey;
  border-width: 0px 2px 2px 0px;
  display: inline-block;

  padding: ${ARROW_SIZE}px;
  margin-right: ${ props => props.direction === 'left' ? '-' + ARROW_CENTERING + 'px' : ARROW_CENTERING + 'px' };

  transform: ${ props => props.direction === 'left' ? 'rotate(135deg)' : 'rotate(-45deg)' };
  transition: border 200ms;
  `;

const ArrowButton = styled.button`
  border: 1px solid grey;
  border-radius: 50%;
  display: ${ props => props.disabled ? 'none' : 'inline-block' };
  background: inherit;
  position: absolute;

  cursor: pointer;
  width: 50px;
  height: 50px;
  top: 15px;
  ${ props =>  props.direction + ': 15px' };
  
  transition: border 200ms;

  &:hover, :active, :focus {
    border: none;
    animation: ${ props => props.direction === 'left' ? LeftArrowAnimation : RightArrowAnimation } 600ms linear infinite;
  };

  &:hover ${Arrow} {
    border: 1px solid #AFE3D6;
    border-width: 0px 2px 2px 0px;
  }
`;

const QuestionAnswers = styled.button`
  background-color: inherit;
  border: 1px solid white;
  border-radius: 5px;

  color: white;
  width: 150px;
  min-height: 35px;
  max-height: auto;
  margin: 15px 0px;
  cursor: pointer;

  transition: 300ms;

  &:hover, :focus {
    background-color: white;
    border: none;
    box-shadow: 0 0 15px white, inset 0 0 2px black;
    outline: none;

    color: #AFE3D6;
  };
`;

const QuestionAnswersContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  width: 75%;
  overflow: auto;

  @media screen and (min-width: 1332px) {
    width: 100%;
  };
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
  width: 45vw;
  height: 350px;
  margin: 0 auto;

  @media screen and (min-width: 1332px) {
    width: 65vw;
  };
`;

const RealQuestionContainer = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;

  height: 100vh;
`;
export {
  RealQuestionContainer,
  QuestionContainer,
  QuestionHeader,
  QuestionAnswersContainer,
  QuestionAnswers,
  ArrowButton,
  Arrow,
};