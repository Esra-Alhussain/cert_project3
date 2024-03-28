import { BrowserRouter as Router, Link } from 'react-router-dom';
import EditQuiz from "./EditQuiz"
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import '../styles/dashboard.css';
import { useDispatch,useSelector } from 'react-redux'; // Import useDispatch to dispatch actions
import { deleteQuiz, saveQuiz,createQuiz } from '../state/MainStateSlice'; // Import deleteQuiz and saveQuiz actions

const Dashboard = ({ quizData,createNewQuiz,deleteTheQuestion, loadQuiz,addQuestionToQuiz, editQuestionInQuiz }) => {
    const dispatch = useDispatch(); // Initialize useDispatch hook
    // const quizData = useSelector((state) => state.main.quizData);
    console.log("quizData",quizData)
    return(
        <div>
            <h1 className="dashboardTitle">User Dashboard</h1>
              <br/>
                <div className="quizDetail">
                    {quizData.map((quiz) => (
                        <div key={quiz.id} className="quiz">
                        <h3 className="quizTitleEdit">{quiz.name}</h3>

                        <Link to={`editQuiz/${quiz.id}`}>
                            <button className="editQuizbtn">Edit</button>
                        </Link>
                            {/* Dispatch the saveQuiz action with the quiz object */}
                            <button className="deleteQuiz" onClick={() => dispatch(deleteQuiz(quiz.id))}>Delete</button>
                            <button className="saveQuiz" onClick={() => dispatch(saveQuiz(quiz))}>Save Quiz</button>
                        </div> 
     
                    ))}   
                   
                    <br/>
                </div>
                    <div className="createQuiz">
                        <div className="quizTitle">
                            <form onSubmit={createNewQuiz}>
                                <label htmlFor="quizTitle">Quiz Title</label>
                                <input 
                                    type="text"  
                                    id="quizTitle" 
                                    name="quizTitle" 
                                    placeholder="Enter the Quiz title" 
                                    />

                                <button className="createQuiz" type="submit"> Create a Quiz</button>

                            </form>
                        </div>
                    </div>

                    <div className="loadQuiz">
                        <div className="quizTitle">
                            <form onSubmit={(e)=>loadQuiz(e,e.target.quizTitle.value)}>
                                <label htmlFor="quizTitle">Quiz Title</label>
                                <input 
                                    type="text"  
                                    id="quizTitle" 
                                    name="quizTitle" 
                                    placeholder="Enter the Quiz title to load it" 
                                    />

                                <button className="loadQuiz" type="submit"> Load a Quiz</button>

                            </form>
                        </div>
                    </div>

        <Routes>
                {/* the dynamic quiz routes  */}
                {quizData.map((quiz) => (
                    <Route key={quiz.id} path={`editQuiz/${quiz.id}`} element={<EditQuiz quiz={quiz} addQuestionToQuiz={addQuestionToQuiz} deleteTheQuestion={deleteTheQuestion} editQuestionInQuiz={editQuestionInQuiz}/>} />
                ))}
         </Routes>


        </div>
    )
}

export default Dashboard