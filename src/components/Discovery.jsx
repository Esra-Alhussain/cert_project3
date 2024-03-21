import React from 'react';
import { Link } from 'react-router-dom';
import PlayQuiz from './playQuiz';
import { Route, Routes } from 'react-router-dom';

const Discovery = ({ quizData, updateScore,handleAnswerSubmission,handleUpdateScore,setSelectedAnswer, selectedAnswer,calculateScore }) => {
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
          <Routes>
              {/* the dynamic quiz routes  */}
              {quizData.map((quiz) => (
              <Route key={quiz.id} path={`playQuiz/${quiz.id}`} element={<PlayQuiz quiz={quiz} setSelectedAnswer={setSelectedAnswer} calculateScore={calculateScore}  handleUpdateScore={handleUpdateScore} updateScore ={updateScore} handleAnswerSubmission ={handleAnswerSubmission} selectedAnswer={selectedAnswer}/>} />
                ))}
         </Routes>
        </div>
        
    )
}

export default Discovery 