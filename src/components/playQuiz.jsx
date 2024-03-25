import React from 'react';
import { useState } from 'react';
import '../styles/playQuiz.css';

const PlayQuiz = ({quiz,updateHighestScore }) => {
   // State to handle the Array of selected answers instead of being overwritten each time
   const [selectedAnswers, setSelectedAnswers] = useState({});

   console.log('quiz info:', quiz)
   const questionLength = quiz.questions.length
  
    // Pass the selected answer to the submission handler
    const handleSubmit =(e) => {
      e.preventDefault();
      //retrieves an array of the keys (question ids) from the selectedAnswers object and then calculates the length of this array
      //it counts how many questions have been answered by checking how many keys are present in the selectedAnswers object.
      if(Object.keys(selectedAnswers).length === 0){
        alert('Please select an answer for all questions.');
        return;   //prevent the form from proceeding further
      }
      handleAnswerSubmission(selectedAnswers, quiz);
    }


   const handleAnswerSubmission = (selectedAnswers,quiz) => {
    console.log('Selected answer:', selectedAnswers);

    // Initialize score variable
    let totalScore = 0;
    //Convert the object into ann array of key-value pairs using Object.entries
    const selectedAnswerArray = Object.entries(selectedAnswers);

    //Use map to loop over each key-value pairs
    selectedAnswerArray.map(([questionId, selectedAnswer]) => {
      console.log(`Selected answer for question ${questionId}:`, selectedAnswer);

    //find the question in the quiz object using the questionId
    const question = quiz.questions.find(question => question.id === parseInt(questionId) )

    if(question){
      //Compare the selected answer with the correct answer in the question object
      const correctAnswer = question.correctAnswer;

      console.log(`Question ${questionId}:`);
      console.log(`Selected answer: ${selectedAnswer}`);
      console.log(`Correct answer: ${correctAnswer}`);

      if(correctAnswer === selectedAnswer){
        totalScore += question.points;
        console.log(`You answerd the question number (${questionId}) : ${selectedAnswer} which is correct!!`);
      }else{
        console.log(`You answerd the question number (${questionId}) : ${selectedAnswer} which is Wrong!!`);
      }
      console.log(`Question: ${questionId}`);
    }else{
      alert(`Question ${questionId} not found in the quiz object.`)
     }
    })
    alert(`Your total score is : ${totalScore}`);
    // if (totalScore > quiz.highestScore) {
    //   const updatedQuizData = quizData.map((item) =>
    //     item.id === quiz.id ? { ...item, highestScore: totalScore } : item
    //   );
    //   console.log('QuizData:', quizData)

    //   setQuizData(updatedQuizData);
    // }

    console.log(`quiz.highestScore ${quiz.highestScore} `)
    console.log(`quiz.id,${quiz.id}`)

  // Check if the total score is higher than the current highest score
  if (totalScore > quiz.highestScore) {
    // Update the highest score in the parent component
    updateHighestScore(quiz.id, totalScore);
    console.log(`quiz.id,${quiz.id}`)
    console.log(`Inside the update function`)
}
  };

    // Update the selected answers state when an option is selected
    // This function is triggered when an option in the dropdown menu is selected.
    // It updates the selectedAnswers state to associate each selected answer with its corresponding question.
    //the ID of the current question is obtained from the question object being mapped over by map function
    const handleSelectChange =(e,questionId)=>{
      setSelectedAnswers(prevSelectedAnswers => ({     
        ...prevSelectedAnswers,         // Spread the previous selectedAnswers to preserve existing selections
        [questionId]:e.target.value,  //assigns the value of questionId as the key of the new property in the object
      }))
    };


    return(
        <div className="quizDisplay">
            <div className="quiz">
              <h2 className="quizTitle">Quiz Title: {quiz.name}</h2>
              <form className='submitAnswers' onSubmit={(e) => handleSubmit(e)}>

                {quiz.questions.map((question, index) => (
                  <div key={index}>
                    <h3>Question : {question.question}</h3>
                    <h4>The Answers:</h4> 
                    <select name="answer" onChange={(e) => handleSelectChange(e, question.id)} required>
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
            <h4> The highest score in the quiz is:{quiz.highestScore}</h4>
        </div>
    )
}

export default PlayQuiz
