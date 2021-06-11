import He from 'he';
import { Component } from 'react';

import {
    RealQuestionContainer,
    QuestionContainer,
    QuestionHeader,
    QuestionAnswersContainer,
    QuestionAnswers,
    ArrowButton,
    Arrow,
} from './Question.css';
export default class Question extends Component {
    state = {
        category: null,
        question: null,
        type: null,
        difficulty: null,
        answers: null,
        correct_answer: null,
        incorrect_answers: null,
    };

    componentDidMount() {
        const { category, question, type, difficulty, correct_answer, incorrect_answers } = this.props.question;
        let _answers = [], ranAnswers;

        //If multiple choice
        if(type !== "boolean") {
            //Populate _answers array with both correct and incorrect answers
            _answers.push(correct_answer);
            _answers = _answers.concat(incorrect_answers);

            ranAnswers = RandomizeAnswers(_answers);
        } else {
            //Have a consistent True/False look
            ranAnswers = [ ["True"], ["False"] ];
        };

        this.setState({
            category: category,
            question: question,
            type: type,
            difficulty: difficulty,
            answers: ranAnswers,
            correct_answer: correct_answer,
            incorrect_answers: incorrect_answers,
        });
    };

    isAnswerCorrectHandler = (e) => {
        const answer = e.target.value;
        console.log(answer === this.state.correct_answer);
        if (answer === this.state.correct_answer) {
            this.props.setScore(this.props.score + 1)
        };
    };

    render() {
        let displayAnswers = this.state.answers ? this.state.answers.map((answer, index) => {
            return (
                <QuestionAnswers
                    key={index}
                    onClick={this.isAnswerCorrectHandler}
                    value={answer.toString()}
                >
                    {He.decode(answer.toString())}
                </QuestionAnswers>
            );
        }) : null;

        let displayQuestion = this.state.question ? 
            <QuestionContainer>
                <QuestionHeader>{He.decode(this.state.question)}</QuestionHeader>
                <QuestionAnswersContainer>{displayAnswers}</QuestionAnswersContainer>
            </QuestionContainer> : <div>Loading...</div>

        return (
            <RealQuestionContainer>
                {console.log(this.props.score)}
                <ArrowButton
                    direction={"left"}
                    disabled={!this.props.currentQuestion > 0}
                    onClick={() => this.props.setCurrentQuestion(this.props.currentQuestion - 1)}
                >
                    <Arrow direction={"left"} />
                </ArrowButton>
                <ArrowButton
                    direction={"right"}
                    disabled={this.props.currentQuestion >= 9}
                    onClick={() => this.props.setCurrentQuestion(this.props.currentQuestion + 1)}
                >
                    <Arrow direction={"right"} />
                </ArrowButton>
                {displayQuestion}
            </RealQuestionContainer>
        );
    };
};

const RandomizeAnswers = (array) => {
    let nArray = [];

    while(array.length > 0) {
        let arrStart = Math.floor((Math.random() * array.length - 1) );
        nArray.push(array.splice(arrStart, 1));
    };

    return nArray;
};