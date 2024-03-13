import { BrowserRouter as Router, Link } from 'react-router-dom';
import EditQuiz from "./EditQuiz"
import { v4 as uuidv4 } from 'uuid';


const Dashboard = ({ quizData , handleAddName,handleAddQuestion, handleAnswerTextChange,  handleQuestionTextChange}) => {

    return(
        <div>
            <h1 className="dashboardTitle">User Dashboard</h1>
            <br/>
                <div className="quizDetail">
                    <div className="quiz">
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
                    </div>
                    <br/>
                </div>
                    <div className="createQuiz">
                        <div className="quizTitle">
                            <label htmlFor="quizTitle">Quiz Title</label>
                            <input type="text"  id="quizTitle" name="quizTitle" placeholder="Enter the Quiz title" onChange={handleAddName}/>
                        </div>
                     {quizData.map((quiz, index) => (
                       <><div key={uuidv4()} className="questions&answers">
                             <form className="createQuizForm">
                                 <label htmlFor={`question${index}`}>Question</label>
                                 <input type="text" id={`question${index}`} name="question" placeholder="Enter your Question" onChange={(e) => handleQuestionTextChange(index, e.target.value)} />
                                 <div className="answers">
                                    { [0,1,2,3].map((answerIndex) => (
                                     <><div className={`answer${answerIndex+1}`} key={answerIndex}>
                                            <input 
                                                type="text" 
                                                id={`answer${answerIndex+1}-${quiz.id}`}
                                                name={`answer${answerIndex+1}`} 
                                                placeholder={`Enter your ${answerIndex+1} answer`}  
                                                onChange={(e) => handleAnswerTextChange(index, answerIndex, e.target.value)} />
                                             <input 
                                                    type="checkbox" 
                                                    id= {`answer${answerIndex + 1}Checkbox-${quiz.id}`} 
                                                    name={`answer${answerIndex + 1}Checkbox`} 
                                                    />
                                            <button className="Delete"> Delete</button>
                                        </div>
                                       </>
                                    ))}
                                 </div>
                                 <button className="Delete" onClick={() => { deleteQuestion(quizData.questions[index].id); } }> Delete Question </button>
                             </form>
                         </div>
                       </>
                        ))}
                    </div>
                
                <button className="addQuestion" onClick={handleAddQuestion} >Add Question</button>

                <br/>
                {/* <Link to="/createQuiz"> */}
                    <button className="createQuiz"> Create a Quiz</button>
                {/* </Link> */}
        </div>
    )
}

export default Dashboard