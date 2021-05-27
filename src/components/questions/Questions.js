import Question from './question/Question';

export default function Questions(prop) {
    return prop.questions.map((question, index) => {
        return (
            <Question key={question.question} question={question}/>
        );
    });
};