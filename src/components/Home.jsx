import Discovery from "./Discovery"
import { Route, Routes } from 'react-router-dom';

const Home = ({ quizData, handleUpdateHighestScore }) => {
  // console.log("quizData:", quizData);

  return (
    <div>
           <Discovery quizData={quizData}  handleUpdateHighestScore={handleUpdateHighestScore} />
    </div>
  )
}

export default Home