import React from 'react';
import { Link } from 'react-router-dom';
import PlayQuiz from './Quiz';
import { Route, Routes } from 'react-router-dom';
import '../styles/discovery.css';
const Discovery = ({ quizData,handleUpdateHighestScore}) => {
    console.log('quizData:',quizData)
    return(
        <div>
            <h2 className='popularQuizzes'>Popular Quizzes </h2>
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
              <Route key={quiz.id} path={`playQuiz/${quiz.id}`} element={<PlayQuiz quiz={quiz}  handleUpdateHighestScore={handleUpdateHighestScore} />} />
                ))}
         </Routes>
        </div>
        
    )
}

export default Discovery 