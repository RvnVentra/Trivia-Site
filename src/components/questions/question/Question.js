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
        correct_answer: null,
        incorrect_answers: null,
    };

    componentDidMount() {
        const { category, question, type, difficulty, correct_answer, incorrect_answers } = this.props.question;

        this.setState({
            category: category,
            question: question,
            type: type,
            difficulty: difficulty,
            correct_answer: correct_answer,
            incorrect_answers: incorrect_answers,
        });
    };

    isAnswerCorrectHandler = (e) => {
        const { setScore, selected, setSelected, questionIndex } = this.props;
        const answer = e.target.value;
        const sArray = [...selected];

        selected.length === 0 ? sArray.push(answer) : sArray.splice(questionIndex, 1, answer);

        if (answer === this.state.correct_answer) {
            setScore(this.props.score + 1)
        };

        setSelected(sArray);
    };

    render() {
        let displayAnswers = this.props.question.ranAnswers ? this.props.question.ranAnswers.map((answer, index) => {
            console.log(this.props.selected[0] === answer.toString())
            return (
                <QuestionAnswers
                    key={index}
                    onClick={this.isAnswerCorrectHandler}
                    value={answer.toString()}
                    disabled={this.props.selected[index] === answer.toString()}
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
                {this.props.score}
                {this.props.selected}
                <ArrowButton
                    direction={"left"}
                    disabled={!this.props.questionIndex > 0}
                    onClick={() => this.props.setQuestionIndex(this.props.questionIndex - 1)}
                >
                    <Arrow direction={"left"} />
                </ArrowButton>
                <ArrowButton
                    direction={"right"}
                    disabled={this.props.questionIndex >= 9}
                    onClick={() => this.props.setQuestionIndex(this.props.questionIndex + 1)}
                >
                    <Arrow direction={"right"} />
                </ArrowButton>
                {displayQuestion}
            </RealQuestionContainer>
        );
    };
};