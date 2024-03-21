import { BrowserRouter as Router, Link } from 'react-router-dom';
import EditQuiz from "./EditQuiz"
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';


const Dashboard = ({ quizData , createQuiz, deleteQuiz,deleteQuestion, loadQuiz,addQuestionToQuiz, editQuiz, saveQuiz}) => {
   
    return(
        <div>
            <h1 className="dashboardTitle">User Dashboard</h1>
              <br/>
                <div className="quizDetail">
                    {quizData.map((quiz) => (
                        <div key={quiz.id} className="quiz">
                        <h3 className="quizTitle">{quiz.name}</h3>

                        <Link to={`editQuiz/${quiz.id}`}>
                            <button className="editQuiz">Edit</button>
                        </Link>
                            <button className="deleteQuiz" onClick={ () => deleteQuiz(quiz.id)}>Delete</button>
                            <button className="saveQuiz" onClick={ () => saveQuiz(quiz.name)}>Save Quiz</button>
                        </div>
                    ))}
                    {/* 
                        <h3 className="quizTitle">Quiz Name</h3>
                        <Link to="/editQuiz">
                            <button className="editQuiz">Edit</button>
                        </Link>
                        <button className="deleteQuiz">Delete</button>
                    </div>

                    <h3 className="quizTitle">Quiz Name</h3>
                        <Link to="/editQuiz">
                            <button className="editQuiz">Edit</button>
                        </Link><button className="deleteQuiz">Delete</button>



                    <div className="quiz">
                        <h3 className="quizTitle">Quiz Name</h3>
                        <Link to="/editQuiz">
                            <button className="editQuiz">Edit</button>
                        </Link>                        
                        <button className="deleteQuiz">Delete</button>
                    </div> */}
                    <br/>
                </div>
                    <div className="createQuiz">
                        <div className="quizTitle">
                            <form onSubmit={createQuiz}>
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
                
                {/* <button className="addQuestion" onClick={handleAddQuestion} >Add Question</button> */}

                <br/>
                {/* <Link to="/createQuiz"> */}
                {/* </Link> */}

        <Routes>
                {/* the dynamic quiz routes  */}
                {quizData.map((quiz) => (
                    <Route key={quiz.id} path={`editQuiz/${quiz.id}`} element={<EditQuiz quiz={quiz} addQuestionToQuiz={addQuestionToQuiz} deleteQuestion={deleteQuestion} editQuiz={editQuiz}/>} />
                ))}
         </Routes>


        </div>
    )
}

export default Dashboard