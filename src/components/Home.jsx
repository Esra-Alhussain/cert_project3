import Discovery from "./Discovery"
import { Route, Routes } from 'react-router-dom';

const Home = ({ quizData, updateScore,selectedAnswer, calculateScore, handleSubmit, handleAnswerSubmission,handleUpdateScore,setSelectedAnswer }) => {
  // console.log("quizData:", quizData);

  return (
    <div>
           <Discovery quizData={quizData} selectedAnswer={selectedAnswer} handleSubmit={handleSubmit} calculateScore={calculateScore} updateScore ={updateScore} setSelectedAnswer={setSelectedAnswer} handleUpdateScore={handleUpdateScore} handleAnswerSubmission ={handleAnswerSubmission }/>
    </div>
  )
}

export default Home