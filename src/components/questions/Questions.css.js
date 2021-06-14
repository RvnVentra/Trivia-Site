import styled, { keyframes } from 'styled-components';

const LoadingAnimation = keyframes`
    30% {
        margin-top: 50vh;
    };

    35% {
        margin-top: 49vh;
    };

    50% {
        margin-top: 48vh;
    };

    65% {
        margin-top: 49vh;
    };

    70% {
        margin-top: 50vh;
    };
`;

const Loading = styled.p`
    display: block;

    color: white;
    font-size: 36px;
    font-style: italic;
    margin-top: 50vh;

    animation: ${LoadingAnimation} 750ms linear ${ props => props.delay ? props.delay * props.index + 'ms' : '0ms' } infinite;
`;

const LoadingContainer = styled.div`
    display: flex;

    width: 100%;
    justify-content: center;
`;

export {
    LoadingContainer,
    Loading,
};