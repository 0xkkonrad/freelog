import React, { useState } from 'react';

function DailyQuestion() {
    const [responses, setResponses] = useState([]);

    const handleAnswer = (answer) => {
        const date = new Date();
        const newResponse = {
            answer,
            timestamp: date.getTime(),
            formattedDate: date.toLocaleString()
        };
        setResponses(prevResponses => [...prevResponses, newResponse]);
    };
    
    return (
        <div className="text-center p-4">
            <p className="text-xl mb-4">Did you go to the gym today?</p>
            <button onClick={() => handleAnswer('yes')} className="bg-green-500 text-white px-4 py-2 m-2 rounded">Yes</button>
            <button onClick={() => handleAnswer('no')} className="bg-red-500 text-white px-4 py-2 m-2 rounded">No</button>
            
            {/* Display all responses */}
            {responses.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-lg font-bold mb-2">Your Responses:</h2>
                    {responses.map((res, index) => (
                        <div key={index} className="mb-2">
                            <p>{`Answer: ${res.answer}`}</p>
                            <p>{`Time: ${res.formattedDate}`}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
        
    
}

export default DailyQuestion;