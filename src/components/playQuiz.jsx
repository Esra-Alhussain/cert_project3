import React from 'react';
import { useState } from 'react';

const PlayQuiz = ({quiz, updateScore, setSelectedAnswer, selectedAnswer, handleSubmit, handleAnswerSubmission,handleUpdateScore}) => {
 

  
console.log('quiz info:', quiz)
const questionLength = quiz.questions.length
console.log(' question.length:', questionLength)
    return(
        <div className="quizDisplay">
            <div className="quiz">
              <h2 className="quizTitle">Quiz Title: {quiz.name}</h2>
              <form className='submitAnswers' onSubmit={(e) => handleAnswerSubmission(selectedAnswer, quiz, question.id)}>
                {quiz.questions.map((question, index) => (
                  <div key={index}>
                    <h3>Question {questionLength}: {question.question}</h3>
                    <h4>The Answers:</h4> 
                      {question.answers.map((answer, ansIndex) => (
                        <div key={ansIndex}>
                          <input 
                            type="radio" 
                            id={`answer-${ansIndex}`} 
                            name={`answers-${index}`} // Unique name for each question
                            value={answer}  
                            // checked={selectedAnswer[index] === answer}
                            onChange={(e) => setSelectedAnswer(e.target.value)}/>
                          <label htmlFor={`answer-${ansIndex}`}>{answer}</label>
                        </div>
                      ))}
                    </div>
                  
                    ))}
                  </form>
                    {/* onClick={() => { answerSubmission(answer.id); } } */}
               
            </div>
            {/* <h3 className="finalScore">Your Score is: 50</h3>    */}
            {/* <button className="answerSubmission" onClick={handleSubmit}>Submit Answers</button> */}
            <button className= "answerSubmission" type="submit" >Submit the Answers</button>

        </div>
    )
}

export default PlayQuiz
