import { BrowserRouter as Router, Link } from 'react-router-dom';
import EditQuiz from "./EditQuiz"
import { v4 as uuidv4 } from 'uuid';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';


const Dashboard = ({ quizData , createQuiz, deleteQuiz}) => {

    return(
        <div>
            <h1 className="dashboardTitle">User Dashboard</h1>
            <br/>
                <div className="quizDetail">
                    {quizData.map((quiz) => (
                        <div key={quiz.id} className="quiz">
                        <h3 className="quizTitle">{quiz.name}</h3>

                        <Link to={`/editQuiz/${quiz.id}`}>
                            <button className="editQuiz">Edit</button>
                        </Link>
                            <button className="deleteQuiz" onClick={ () => deleteQuiz(quiz.id)}>Delete</button>
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
                     {/* {quizData.map((quiz, index) => (
                       <><div key={quiz.id} className="questions&answers">
                             <form className="createQuizForm">
                                 <label htmlFor={`question${index}`}>Question</label>
                                 <input type="text" id={`question${index}`} name="question" placeholder="Enter your Question" onChange={(e) => handleQuestionTextChange(index, e.target.value)} />
        
                                 <button className="Delete" onClick={() => { deleteQuestion(quizData.questions[index].id); } }> Delete Question </button>
                             </form>
                         </div>
                       </>
                        ))} */}
                    </div>
                
                {/* <button className="addQuestion" onClick={handleAddQuestion} >Add Question</button> */}

                <br/>
                {/* <Link to="/createQuiz"> */}
                {/* </Link> */}

        <Routes>
            {/* the parent route for your dynamic quiz routes */}
            {/* <Route path="/dashboard/*"> */}
                
                {/* the dynamic quiz routes  */}
                {quizData.map((quiz) => (
                    <Route key={quiz.id} path={`/editQuiz/${quiz.id}`} element={<EditQuiz quiz={quiz} />} />
                ))}
            
            {/* </Route> */}
            {/* Redirect the user back to the dashboard when they navigate to a non-existent route */}
            {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
        </Routes>


        </div>
    )
}

export default Dashboard