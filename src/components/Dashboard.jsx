import { BrowserRouter as Router, Link } from 'react-router-dom';
import EditQuiz from "./EditQuiz"
import { v4 as uuidv4 } from 'uuid';


const Dashboard = ({ quizData , handleAddName,handleAddQuestion, handleAnswerTextChange,  handleQuestionTextChange}) => {

    return(
        <div>
            <h1 className="dashboardTitle">User Dashboard</h1>
            <br/>
                <div className="quizDetail">
                    {quizData.map((quiz) => (
                        <div key={quiz.id} className="quiz">
                        <h3 className="quizTitle">{quiz.name}</h3>
                        <Link to="/editQuiz">
                            <button className="editQuiz">Edit</button>
                        </Link>
                            <button className="deleteQuiz">Delete</button>
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
                            <label htmlFor="quizTitle">Quiz Title</label>
                            <input type="text"  id="quizTitle" name="quizTitle" placeholder="Enter the Quiz title" onChange={handleAddName}/>
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
                    <button className="createQuiz" onClick={createQuiz}> Create a Quiz</button>
                {/* </Link> */}
        </div>
    )
}

export default Dashboard