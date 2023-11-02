import React, { useState } from 'react';

function QuestionSetter({ addQuestion }) {
    const [userInput, setUserInput] = useState("");

    return (
        <div className="text-center p-4">
            <div className="mb-4">
                <input 
                    type="text"
                    value={userInput}
                    onChange={e => setUserInput(e.target.value)}
                    placeholder="Type your question"
                    className="p-2 border rounded w-full"
                />
                <button
                    onClick={() => {
                        addQuestion(userInput);
                        setUserInput("");
                    }}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Question
                </button>
            </div>
        </div>
    );
}

export default QuestionSetter;
