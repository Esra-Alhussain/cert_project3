import React from 'react';
import { Link } from 'react-router-dom';
import DoQuiz from "./DoQuiz"

const Discovery = () => {
    return(
        <div>
            <h2>Popular Quizzes </h2>
 
                <div className="quiz">
                    <h3 className="quizTitle">Quiz Name</h3>
                    <p className="quizDescription">Quiz Description</p>
                    <Link to="/doQuiz">Start Quiz</Link>
                </div>

                <div className="quiz">
                    <h3 className="quizTitle">Quiz Name</h3>
                    <p className="quizDescription">Quiz Description</p>
                    <Link to="/doQuiz">Start Quiz</Link>
                </div>

                <div className="quiz">
                    <h3 className="quizTitle">Quiz Name</h3>
                    <p className="quizDescription">Quiz Description</p>
                    <Link to="/doQuiz">Start Quiz</Link>
                </div>
        </div>
    )
}

export default Discovery 