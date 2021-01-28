import React from 'react';

const Questionaire = ({ handleNextQuestion, showAnswers, handleAnswer, data: { question, correct_answer, answers, difficulty } }) => {

    const difficultyColor = difficulty === 'easy' ? 'bg-green-500' : difficulty === 'medium' ? 'bg-yellow-500' : 'bg-red-600'
    const difficultyText = difficulty === 'easy' ? 'x1' : difficulty === 'medium' ? 'x2' : 'x3'

    return (
        <div className="flex flex-col m-10">
            <div className={`${difficultyColor} ml-auto mb-4 text-white p-2 rounded-lg font-semibold shadow`}>
                <h2 className="text-sm" dangerouslySetInnerHTML={{ __html: `${difficulty} ${difficultyText}` }}></h2>
            </div>
            <div className='bg-white text-blue-600 p-10 rounded-lg shadow-md'>
                <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question }}></h2>
            </div>
            <div className='grid grid-cols-2 gap-6 mt-4 bg-purple'>
                {answers.map((answer, idx) => {
                    const textColor = showAnswers ? answer === correct_answer ? 'text-green-500' : 'text-red-500' : 'text-blue-600'
                    return (<button
                        key={idx}
                        dangerouslySetInnerHTML={{ __html: answer }}
                        onClick={() => handleAnswer(answer)}
                        className={`bg-white ${textColor} p-4 rounded-lg font-semibold shadow `}></button>)
                })}
            </div>
            {showAnswers && (
                <button
                    onClick={() => handleNextQuestion()}
                    dangerouslySetInnerHTML={{ __html: "Next Question" }}
                    className={`ml-auto mt-4 bg-blue-500 text-white p-4 rounded-lg font-semibold shadow `}></button>)}
        </div>
    )
};




export default Questionaire; 