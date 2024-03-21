import Discovery from "./Discovery"
import { Route, Routes } from 'react-router-dom';

const Home = ({ quizData }) => {
  console.log("quizData:", quizData);

  return (
    <div>
           <Discovery quizData={quizData}/>
    </div>
  )
}

export default Home