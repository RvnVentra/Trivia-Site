import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Question from './question/Question';

import { GlobalStyle, LoadingContainer, Loading } from './Questions.css';

const LOADING_TEXT = "Loading...".split('');
const DELAY = 750 / LOADING_TEXT.length ;

export default function Questions() {
    const [questions, setQuestions] = useState(null);
    const { categoryId } = useParams();
    
    // useEffect(() => {
    //     const fetchQuestions = async() => {
    //         const res = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}`);
    //         const data = await res.json();

    //         if(data.response_code === 0) {
    //             setQuestions(data.results);
    //         } else {
    //             console.log('category not found');
    //         };
    //     };

    //     fetchQuestions();
    // }, []);

    return (
        questions ? questions.map((question) => {
            return (
                <Question key={question.question} question={question}/>
            );
        }) : <LoadingContainer>
            <GlobalStyle />
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
    );
};

