import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Question from './question/Question';
import Results from './results/Results';

import { LoadingContainer, Loading } from './Questions.css';

const LOADING_TEXT = "Loading...".split('');
const DELAY = 750 / LOADING_TEXT.length ;

export default function Questions() {
    const [results, setResults] = useState(null);
    const [questions, setQuestions] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selected, setSelected] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}`)
            .then(res => res.json())
            .then(data => { return data.results; })
            .then(results => {
                const _questions = [...results];

                for(let i = 0; i < _questions.length; i++) {
                    const { type, correct_answer, incorrect_answers } = results[i];

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
                };
                setQuestions(_questions);
            });
    }, [categoryId]);

    return (
        <>
            {
                results ? <Results /> : 
                questions ? questions.map((question, index) => {
                    return (
                        index === questionIndex ? <Question 
                            key={question.question}
                            questions={questions}
                            question={question}
                            questionIndex={questionIndex}
                            setQuestionIndex={setQuestionIndex}
                            selected={selected}
                            setSelected={setSelected}
                            setResults={setResults}
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