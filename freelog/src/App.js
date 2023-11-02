import React, { useState } from 'react';
import DailyQuestion from './components/DailyQuestion';
import QuestionSetter from './components/QuestionSetter';

function App() {
    const [questions, setQuestions] = useState([]);
    const [currentResponses, setCurrentResponses] = useState([]);

    const addQuestion = (newQuestion) => {
        setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
    };

    const addResponse = (question, answer) => {
        const response = {
            question,
            answer,
            timestamp: new Date().getTime(),
            formattedDate: new Date().toLocaleString()
        };
        setCurrentResponses(prevResponses => [...prevResponses, response]);
    };

    return (
        <div>
            <QuestionSetter addQuestion={addQuestion} />
            <DailyQuestion questions={questions} addResponse={addResponse} currentResponses={currentResponses} />
        </div>
    );
}

export default App;
