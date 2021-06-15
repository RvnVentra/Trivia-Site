import { useEffect, useState } from "react";

import { ResultsContainer, ResultText, ViewAnswers, } from './Results.css';

export default function Results(props) {
    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);
    const [answersList, setAnswersList] = useState([]);
    const { questions, selected } = props.location.state;

    function LoopAnswers() {
        let s = 0, _answersList = [...answersList];

        for(let i = 0; i < selected.length; i++) {
            if(questions[i]['correct_answer'] === selected[i]) {
                s++;
            } else {
                _answersList.push("Your answer: " + questions[i]['correct_answer'] + ". Correct answer: " + selected[i]);
            }
        };

        setScore(s);
        setAnswersList(_answersList);
    };

    useEffect(() => {
        LoopAnswers();
    }, []);

    const showAnswersHandler = () => {
        setShowAnswers(!showAnswers);
    };

    let toggleShowAnswers = showAnswers ? (
        <div>
            {
                answersList.map((answers, index) => {
                    return <li key={index}>{answers}</li>
                })
            }
            <ViewAnswers onClick={showAnswersHandler}>Click to hide wrong answers</ViewAnswers>
        </div>
    ) : (
    <ResultsContainer>
        <ResultText>You have scored: {score} out of 10!</ResultText>
        <ViewAnswers onClick={showAnswersHandler}>Click to view wrong answers</ViewAnswers>
    </ResultsContainer>
    );

    return ( 
        <div>
            { toggleShowAnswers }
        </div>
    );
};