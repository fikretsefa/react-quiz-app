import React from 'react';



const QuizResults = ({quizResults,score}) => {
    return (
        <div className="flex flex-col max-h-screen">
            <div className='grid grid-cols-1 gap-6 mt-4'>
            <div className='ml-auto bg-white p-3 rounded-lg shadow-md font-semibold mt-1' >
                <h2 className={`text-lg text-blue-500`} dangerouslySetInnerHTML={{ __html: `Score : ${score}`}}></h2>
            </div>
                {quizResults.map((quizResults, x) => {
                    // console.log(x)
                    const textColor = quizResults.quizResultType === true ? 'text-green-500' : 'text-red-500'
                    const difficultyColor = quizResults.difficulty === 'easy' ? 'bg-green-500' : quizResults.difficulty === 'medium' ? 'bg-yellow-500' : 'bg-red-600'

                    return (
                        <div>
                            <div className='bg-white text-blue-600 p-5 rounded-lg shadow-md font-semibold'>
                                <div className={`${difficultyColor} w-min mb-1 text-white p-2 rounded-lg font-semibold shadow`}>
                                    <h2 className="text-sm" dangerouslySetInnerHTML={{ __html: `${quizResults.difficulty}` }}></h2>
                                </div>
                                <h2 className={`text-md ${textColor}`} dangerouslySetInnerHTML={{ __html: quizResults.quizResultQuestion}}></h2>
                                <h2 className={`text-md text-green-500`} dangerouslySetInnerHTML={{ __html: `${quizResults.quizCorrectAnswer}`}}></h2>
                            </div>
                        </div>

                    )
                })}

            </div>
        </div>
    )
};




export default QuizResults; 