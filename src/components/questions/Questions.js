import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Question from './question/Question';

import { GlobalStyle, LoadingContainer, Loading } from './Questions.css';

const LOADING_TEXT = "Loading...".split('');
const DELAY = 750 / LOADING_TEXT.length ;

export default function Questions() {
    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { categoryId } = useParams();
    
    useEffect(() => {
        const fetchQuestions = async() => {
            const res = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}`);
            const data = await res.json();

            if(data.response_code === 0) {
                setQuestions(data.results);
            } else {
                console.log('category not found');
            };
        };

        fetchQuestions();
    }, [categoryId]);

    return (
        <>
            <GlobalStyle />
            {
                questions ? questions.map((question, index) => {
                    return (
                        index === currentQuestion ? <Question 
                            key={question.question}
                            question={question}
                            changeCurrentQuestion={setCurrentQuestion}
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

