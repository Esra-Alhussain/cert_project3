import Discovery from "./Discovery"
import { Route, Routes } from 'react-router-dom';

const Home = ({ quizData,selectedAnswer, handleAnswerSubmission,setSelectedAnswer }) => {
  // console.log("quizData:", quizData);

  return (
    <div>
           <Discovery quizData={quizData} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} handleAnswerSubmission ={handleAnswerSubmission }/>
    </div>
  )
}

export default Home