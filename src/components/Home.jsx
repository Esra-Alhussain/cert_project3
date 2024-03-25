import Discovery from "./Discovery"
import { Route, Routes } from 'react-router-dom';

const Home = ({ quizData, updateHighestScore }) => {
  // console.log("quizData:", quizData);

  return (
    <div>
           <Discovery quizData={quizData}  updateHighestScore={updateHighestScore} />
    </div>
  )
}

export default Home