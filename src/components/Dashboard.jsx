import { BrowserRouter as Router, Link } from 'react-router-dom';
import EditQuiz from "./EditQuiz"

const Dashboard = ({ handleAddName,handleAddQuestion }) => {

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

                    <div className="quiz">
                        <h3 className="quizTitle">Quiz Name</h3>
                        <Link to="/editQuiz">
                            <button className="editQuiz">Edit</button>
                        </Link>                        
                        <button className="deleteQuiz">Delete</button>
                    </div>

                    <div className="createQuiz">
                    <div key={index} className="questions&answers">
                        <form className="createQuizForm">
                            <label htmlFor={`question${index}`}>Question</label>
                            <input type="text" id={`question${index}`} name="question" placeholder="Enter your Question" onChange={(e) => handleQuestionTextChange(index, e.target.value)}/>
                            <div className="answers">
                                <div className="firstAnswer">
                                    <input type="text" id="answer1" name="answer" placeholder="Enter your first answer" onChange={(e) => handleAnswerTextChange(index, 0, e.target.value) }/>
                                    <input type="checkbox" id="answer1" name="answer" /> 
                                    <button className="Delete"> Delete</button> 
                                </div>
                                <div className="secondAnswer">
                                    <input type="text" id="answer2" name="answer2" placeholder="Enter your second answer" onChange={(e) => { handleAnswerTextChange(index, 1, e.target.value)}}></input>
                                    <input type="checkbox" id="answer2" name="answer" />
                                    <button className="Delete"> Delete</button> 
                                </div>
                                <div className="thirdAnswer">
                                    <input type="text" id="answer3" name="answer" placeholder="Enter your third answer" onChange={(e) => { handleAnswerTextChange(index, 2, e.target.value)}}></input>
                                    <input type="checkbox" id="answer3" name="answer"/>
                                    <button className="Delete"> Delete</button> 
                                </div>
                                <div className="fourthAnswer">
                                    <input type="text" id="answer4" name="answer" placeholder="Enter your fourth answer" onChange={(e) => { handleAnswerTextChange(index, 3, e.target.value)}}/>
                                    <input type="checkbox" id="answer4Checkbox" name="answer" />
                                    <button className="Delete"> Delete</button> 
                                </div>
                            </div>  
                            <button className="Delete" onClick= {() => { deleteQuestion(quizData.questions[index].id)}}> Delete Question </button> 
                         </form>    
                </div> 
                        <h3 className="quizTitle">Quiz Name</h3>
                        <Link to="/editQuiz">
                            <button className="editQuiz">Edit</button>
                        </Link>                        
                        <button className="deleteQuiz">Delete</button>
                    </div>
                </div>

                <div className="createQuiz">
                    
                </div>
                <div className="quizTitle">
                    <label htmlFor="quizTitle">Quiz Title</label>
                    <input type="text"  id="quizTitle" name="quizTitle" placeholder="Enter the Quiz title" onChange={handleAddName}/>
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