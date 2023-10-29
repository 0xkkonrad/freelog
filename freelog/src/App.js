import React, { useState } from 'react';
import DailyQuestion from './components/DailyQuestion';
import QuestionSetter from './components/QuestionSetter';


function App() {
    const [currentQuestion, setCurrentQuestion] = useState(null);

    return (
        <div>
            {currentQuestion ? (
                <DailyQuestion currentQuestion={currentQuestion} />
            ) : (
                <QuestionSetter setCurrentQuestion={setCurrentQuestion} />
            )}
        </div>
    );
}

export default App;
