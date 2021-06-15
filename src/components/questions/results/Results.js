import { useEffect, useState } from "react";
import He from 'he';

import { 
    ResultsContainer,
    ResultText,
    ViewAnswers,
    AnswersContainer,
    QuestionsText,
    SelectedAnswersText,
    CorrectAnswersText,
    ReturnHome,
} from './Results.css';

export default function Results(props) {
    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);
    const [questionsList, setQuestionsList] = useState([]);
    const [selectedAnswersList, setselectedAnswersList] = useState([]);
    const [correctAnswersList, setCorrectAnswersList] = useState([]);
    const { questions, selected } = props.location.state;

    function LoopAnswers() {
        let s = 0, _questionsList = [], _selectedAnswersList = [], _correctAnswersList = [];

        for(let i = 0; i < selected.length; i++) {
            if(questions[i]['correct_answer'] === selected[i]) {
                s++;
            } else {
                _questionsList.push(questions[i]['question']);
                _selectedAnswersList.push("Your answer: " + questions[i]['correct_answer'] + ".");
                _correctAnswersList.push("Correct answer: " + selected[i] + ".");
            }
        };

        setScore(s);
        setQuestionsList(_questionsList);
        setselectedAnswersList(_selectedAnswersList);
        setCorrectAnswersList(_correctAnswersList);
    };

    useEffect(() => {
        LoopAnswers();
    }, []);

    const showAnswersHandler = () => {
        setShowAnswers(!showAnswers);
    };

    let toggleShowAnswers = showAnswers ? (
        <ResultsContainer>
            <AnswersContainer>
                {
                    selectedAnswersList.map((selectedAnswers, index) => {
                        return (
                            <>
                                <QuestionsText key={index + 50}>{He.decode(questionsList[index].toString())}</QuestionsText>
                                <SelectedAnswersText key={index}>{He.decode(selectedAnswers.toString())}</SelectedAnswersText>
                                <CorrectAnswersText key={index+100}>{He.decode(correctAnswersList[index].toString())}</CorrectAnswersText>
                            </>
                        )
                    })
                }
            </AnswersContainer>
            <ViewAnswers onClick={showAnswersHandler}>Click to hide wrong answers</ViewAnswers>
        </ResultsContainer>
    ) : (
    <ResultsContainer>
        <ResultText>You have scored: {score} out of 10!</ResultText>
        <ViewAnswers onClick={showAnswersHandler}>Click to view wrong answers</ViewAnswers>
    </ResultsContainer>
    );

    return ( 
        <div>
            <ReturnHome to={"/trivia"}>Home</ReturnHome>
            { toggleShowAnswers }
        </div>
    );
};