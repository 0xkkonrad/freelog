import React, { useState } from 'react';

function DailyQuestion({ questions, addResponse, currentResponses }) {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleAnswer = (answer) => {
        if (selectedQuestion) {
            addResponse(selectedQuestion, answer);
            // setSelectedQuestion(null); // Reset after answering
        }
    };

    return (
        <div className="text-center p-4">
            <select value={selectedQuestion} onChange={e => setSelectedQuestion(e.target.value)} className="mb-4 p-2 border rounded">
                <option value="">Select a question</option>
                {questions.map((q, index) => (
                    <option key={index} value={q}>{q}</option>
                ))}
            </select>

            {selectedQuestion && (
                <>
                    <p className="text-xl mb-4">{selectedQuestion}</p>
                    <button onClick={() => handleAnswer('yes')} className="bg-green-500 text-white px-4 py-2 m-2 rounded">Yes</button>
                    <button onClick={() => handleAnswer('no')} className="bg-red-500 text-white px-4 py-2 m-2 rounded">No</button>
                </>
            )}
            
            {currentResponses.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-lg font-bold mb-2">Your Responses:</h2>
                    {currentResponses.map((res, index) => (
                        <div key={index} className="mb-2">
                            <p><strong>Question:</strong> {res.question}</p>
                            <p><strong>Answer:</strong> {res.answer}</p>
                            <p><strong>Time:</strong> {res.formattedDate}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DailyQuestion;
