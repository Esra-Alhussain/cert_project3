import React from 'react';
import { Link } from 'react-router-dom';
import playQuiz from "./playQuiz"

const Discovery = ({ quizData }) => {
    console.log('quizData:',quizData)
    return(
        <div>
            <h2>Popular Quizzes </h2>
                <div className='popularQuizzes'>
                {quizData.map((quiz) => (
                        <div key={quiz.id} className="quiz">
                        <h3 className="quizTitle">{quiz.name}</h3>

                        <Link to={`playQuiz/${quiz.id}`}>
                            <button className="playQuiz">Play the Quiz</button>
                        </Link>
                        </div>
                    ))}
                </div>
        </div>
        
    )
}

export default Discovery 