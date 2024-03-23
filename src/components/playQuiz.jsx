import React from 'react';
import { useState } from 'react';
import '../styles/playQuiz.css';

const PlayQuiz = ({quiz, handleAnswerSubmission}) => {
console.log('quiz info:', quiz)
const questionLength = quiz.questions.length
console.log(' question.length:', questionLength)


    return(
        <div className="quizDisplay">
            <div className="quiz">
              <h2 className="quizTitle">Quiz Title: {quiz.name}</h2>
              <form className='submitAnswers' onSubmit={(e) => handleAnswerSubmission(e,quiz, question)}>

                {quiz.questions.map((question, index) => (
                  <div key={index}>
                    <h3>Question : {question.question}</h3>
                    <h4>The Answers:</h4> 
                    <select name="answer">
                      {question.answers.map((answer, ansIndex) => (
                        // <div key={ansIndex}>
                        //   <input 
                        //     type="radio" 
                        //     id={`answer-${ansIndex}`} 
                        //     name={`answers-${index}`} // Unique name for each question
                        //     // value={answer}  
                        //     />
                        //   <label htmlFor={`answer-${ansIndex}`}>{answer}</label>
                        // </div>
                        <option key={ansIndex} value={answer}>{answer}</option>
                      ))}
                      
                    </select>
                    </div>
                    ))}
                   <button className= "answerSubmission" type="submit" >Submit the Answers</button>
                  </form>               
            </div>
        </div>
    )
}

export default PlayQuiz
