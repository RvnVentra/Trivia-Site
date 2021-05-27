import He from 'he';
import { Component } from 'react';

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

    render() {
        let displayAnswers = this.state.answers ? this.state.answers.map((answer, index) => {
            return <li key={index}>{He.decode(answer.toString())}</li>
        }) : null;

        let displayQuestion = this.state.question ? 
            <div>
                <p>{He.decode(this.state.question)}</p>
                <p>{displayAnswers}</p>
            </div> : <div>Loading...</div>

        return (
            <div>
                {displayQuestion}
            </div>
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