import React, { Component } from "react";
import Select from 'react-select';
import { Helmet } from 'react-helmet';

import Questions from '../questions/Questions';
import { 
    HomeNav,
    TitleContainer,
    Title,
    SubmitButton,
    SubmitLink,
} from './Trivia-landing.css';

const LOADING_TEXT = "Trivia-Site".split('');
const DELAY =  1750 / LOADING_TEXT.length;

export default class App extends Component {
    state = {
        questions: [],
        categoryId: null,
    };
    
    setCategoryHandler = (e) => {
        this.setState({ categoryId: e.value });
    };

    render() {
        let displayQuestions = this.state.questions ? 
            <Questions questions={this.state.questions}/>
            : null;

        const categoryOptions = [
            { value: 27, label: 'Animals' },
            { value: 25, label: 'Art' },
            { value: 26, label: 'Celebrities' },
            { value: 16, label: 'Entertainment: Board' },
            { value: 10, label: 'Entertainment: Books' },
            { value: 32, label: 'Entertainment: Cartoon & Animations' },
            { value: 29, label: 'Entertainment: Comics' },
            { value: 11, label: 'Entertainment: Film' },
            { value: 31, label: 'Entertainment: Japanese Anime & Manga' },
            { value: 13, label: 'Entertainment: Musicals & Theatres' },
            { value: 14, label: 'Entertainment: Television' },
            { value: 15, label: 'Entertainment: Video Games' },
            { value: 9, label: 'General Knowledge' },
            { value: 22, label: 'Geography' },
            { value: 23, label: 'History' },
            { value: 20, label: 'Mythology' },
            { value: 24, label: 'Politics' },
            { value: 18, label: 'Science: Computers' },
            { value: 30, label: 'Science: Gadgets' },
            { value: 19, label: 'Science: Mathematics' },
            { value: 17, label: 'Science & Nature' },
            { value: 21, label: 'Sports' },
            { value: 28, label: 'Vehicles' },
        ];
        
        return (
            <>
                <Helmet>
                    <title>Trivia</title>
                    <meta name="Trivia Site" content="Trivia Landing" />
                </Helmet>

                <HomeNav to={'/'}>
                    Home
                </HomeNav>

                <TitleContainer>
                    {
                        LOADING_TEXT.map((text, index) => {
                            return (
                                <Title 
                                    key={index}
                                    index={index}
                                    delay={DELAY}
                                >
                                    {text}
                                </Title>
                            );
                        })
                    }
                </TitleContainer>


                <Select 
                    options={categoryOptions}
                    onChange={(e) => this.setCategoryHandler(e)}
                    styles={customSelectStyles}
                />

                <SubmitButton
                    onClick={this.setQuestionsHandler}
                    disabled={!this.state.categoryId}
                > 
                    <SubmitLink to={'/trivia/categoryId=' + this.state.categoryId}>
                        Generate Trivia
                    </SubmitLink>
                </SubmitButton>

                {displayQuestions}
            </>
        );
    };
};

const customSelectStyles = {
    container: (provided) => ({
        ...provided,
        width: '70%',
        margin: '100px auto 125px auto',
        color: 'black',
    }),
};
