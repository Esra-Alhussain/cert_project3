import React from 'react';

const playQuiz = () => {

    return(
        <div className="quizDisplay">
            <div className="quiz">
                <h1 className="quizTitle">The Weather </h1>
                   <div className="" >
                        <h3 className="question">Q1: What is the first cause for the global warm?</h3>
                        <ul className="answers">
                            <li>First Answer</li>
                            <li>Second Answer</li>
                            <li>Third Answer</li>
                            <li>Fourth Answer</li>
                        </ul>
                   </div>
            <h3 className="finalScore">Your Score is: 50</h3>       
            </div>
        </div>
    )
}

export default playQuiz
