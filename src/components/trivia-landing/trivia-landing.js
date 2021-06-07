import React, { Component } from "react";
import Select from 'react-select';
import { Helmet } from 'react-helmet';

import Questions from '../questions/Questions';
import { Link } from "react-router-dom";

export default class App extends Component {
    state = {
        questions: [],
        categoryId: null,
    };
    
    setCategoryHandler = (e) => {
        this.setState({ categoryId: e.value });
    };

    setQuestionsHandler = () => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${this.state.categoryId}`)
            .then(res => res.json())
            .then(data => {
                if(data.response_code === 0) {
                    this.setState({ questions: data.results });
                };
            });
    };

    render() {
        let displayQuestions = this.state.questions ? 
            <Questions questions={this.state.questions}/>
            : <p>Loading...</p>;

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
            <div>
                <Helmet>
                    <title>Trivia</title>
                    <meta name="Trivia Site" content="Trivia Landing" />
                </Helmet>

                <button>
                    <Link to="/">
                        Home
                    </Link>
                </button>

                <h1>Trivia site</h1>
                <h2>Created using React, Trivia API, and Material UI</h2>
                <Select 
                    options={categoryOptions}
                    onChange={(e) => this.setCategoryHandler(e)}
                    styles={customSelectStyles}
                />
                <button onClick={this.setQuestionsHandler}> Generate Trivia</button>
                {displayQuestions}
            </div>
        );
    };
};

const customSelectStyles = {
    container: (provided) => ({
        ...provided,
        width: '70%',
        margin: '0 auto'
    }),
};