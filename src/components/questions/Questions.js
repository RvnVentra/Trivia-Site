import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Question from './question/Question';

import { LoadingContainer, Loading } from './Questions.css';

const LOADING_TEXT = "Loading...".split('');
const DELAY = 750 / LOADING_TEXT.length ;

export default function Questions() {
    const [questions, setQuestions] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(() => {
        const fetchQuestions = async() => {
            const res = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}`);
            const data = await res.json();

            if(data.response_code === 0) {
                setQuestions(data.results);
                const _questions = [...questions];

                for(let i = 0; i < questions.length; i++) {
                    const { type, correct_answer, incorrect_answers } = questions[i];

                    //Create randomized answers
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
                    _questions[i]['ranAnswers'] = ranAnswers;
                }
                setQuestions(_questions);
            } else {
                console.log('category not found');
            };
        };

        fetchQuestions();
    }, [categoryId]);

    return (
        <>
            {
                questions ? questions.map((question, index) => {
                    return (
                        index === questionIndex ? <Question 
                            key={question.question}
                            question={question}
                            questionIndex={questionIndex}
                            setQuestionIndex={setQuestionIndex}
                            score={score}
                            setScore={setScore}
                            selected={selected}
                            setSelected={setSelected}
                        /> : null
                    );
                }) : <LoadingContainer>
                        {
                            LOADING_TEXT.map((text, index) => {
                                return (
                                    <Loading 
                                        key={index}
                                        index={index}
                                        delay={DELAY}
                                    >
                                        {text}
                                    </Loading>
                                );
                            })
                        }
                </LoadingContainer>
            }
        </>
    );
};

const RandomizeAnswers = (array) => {
    let nArray = [];

    while(array.length > 0) {
        let arrStart = Math.floor((Math.random() * array.length - 1) );
        nArray.push(array.splice(arrStart, 1));
    };

    return nArray;
};