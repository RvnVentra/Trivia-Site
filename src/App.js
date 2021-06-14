import { Component } from "react";
import { Helmet } from "react-helmet";

import { 
    HomePage,
    HomeContentContainer,
    HomeContent,
    HomeNavigationContainer,
    HomeNavigationLinkRRD,
    HomeNavigationLink,
} from './App.css';

export default class App extends Component {
    render() {
        return (
            <>
            <Helmet>
                <title>Landing</title>
            </Helmet>

            <HomePage>
                <HomeContentContainer>
                    <HomeContent primary>This project is made using the ReactJS library as a refresher on basic React knowledge.</HomeContent>
                    <HomeContent>The following modules are also used in the creation of this project: </HomeContent>
                    <div>
                        <ul>
                            <li>Styled Components</li>
                            <li>React Router Dom</li>
                            <li>React Helmet</li>
                        </ul>
                    </div>
                </HomeContentContainer>
                
                <HomeNavigationContainer>
                    <HomeNavigationLink rel="noreferrer" href="https://github.com/RvnVentra/Trivia-Site" target="_blank">
                        Github
                    </HomeNavigationLink>
                    <HomeNavigationLinkRRD to="/trivia">
                        Trivia
                    </HomeNavigationLinkRRD>
                </HomeNavigationContainer>
            </HomePage>
            </>
        );
    };
};