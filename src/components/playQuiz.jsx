import React from 'react';
import { useState } from 'react';

const PlayQuiz = ({quiz, updateScore, setSelectedAnswer, selectedAnswer, handleAnswerSubmission,handleUpdateScore}) => {
 

  
console.log('quiz info:', quiz)
const questionLength = quiz.questions.length
console.log(' question.length:', questionLength)
    return(
        <div className="quizDisplay">
            <div className="quiz">
              <h2 className="quizTitle">Quiz Title: {quiz.name}</h2>
              {quiz.questions.map((question, index) => (
                <div key={index}>
                  <h3>Question {questionLength}: {question.question}</h3>
                  <h4>The Answers:</h4> 
                  {/* <ul>
                    {question.answers.map((answer, ansIndex) =>{
                        return <li key={ansIndex}>{answer}</li>
                    })}
                  </ul> */}

                  {question.answers.map((answer, ansIndex) => (
                    <div key={ansIndex}>
                      <input type="radio" id={`answer-${ansIndex}`} name="answers" value={answer}  onChange={(e) => setSelectedAnswer(e.target.value)}/>
                      <label htmlFor={`answer-${ansIndex}`}>{answer}</label>
                      
                    </div>
                  ))}

                  <button className= "answerSubmission" onClick={() => handleAnswerSubmission(selectedAnswer, quiz, question.id)}>Submit the Answer </button>
                  {/* onClick={() => { answerSubmission(answer.id); } } */}
                </div>
                
              ))}
            </div>
            {/* <h3 className="finalScore">Your Score is: 50</h3>    */}


        </div>
    )
}

export default PlayQuiz
