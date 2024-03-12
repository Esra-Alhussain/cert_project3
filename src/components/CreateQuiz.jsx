

const CreateQuiz = ({ quizData, setQuizData ,handleQuestionTextChange, handleAddQuestion}) => {
  
    return(
        <div className="createQuiz">
          {/* Sidebar with question list */}
            <div className="sideBar">
                <div className="questionContainer">
                    <h3 className="questionNumber">Q1</h3>
                    <div className="" >
                        <h6 className="question">Q1: What is the first cause for the global warm?</h6>
                        <ul className="answers">
                            <li>First Answer</li>
                            <li>Second Answer</li>
                            <li>Third Answer</li>
                            <li>Fourth Answer</li>
                        </ul>      
                    </div>
                </div>

                <button className="addQuestion" onClick={handleAddQuestion} >Add Question</button>
                
            </div>
            {quizData.questions.map((question, index) => (
            <div className="questions&answers">
                <h1 className="quizTitle">The Weather </h1>
                        <form className="createQuizForm">
                            <label htmlFor="question">Question</label>
                            <input type="text" id="question" name="question" placeholder="Enter your Question" onChange={(e) => handleQuestionTextChange(index, e.target.value)}/>
                            <div className="answers">
                                <div className="firstAnswer">
                                    <input type="text" id="answer1" name="answer" placeholder="Enter your first answer"/>
                                    <input type="checkbox" id="answer1" name="answer" /> 
                                </div>
                                <div className="secondAnswer">
                                    <input type="text" id="answer2" name="answer2" placeholder="Enter your second answer"></input>
                                    <input type="checkbox" id="answer2" name="answer" placeholder="Enter your second answer"/>
                                </div>
                                <div className="thirdAnswer">
                                    <input type="text" id="answer3" name="answer" placeholder="Enter your third answer"></input>
                                    <input type="checkbox" id="answer3" name="answer" placeholder="Enter your third answer"/>
                                </div>
                                <div className="fourthAnswer">
                                    <input type="text" id="answer4" name="answer" placeholder="Enter your fourth answer"/>
                                    <input type="checkbox" id="answer4" name="answer" placeholder="Enter your fourth answer"/>
                                </div>
                            </div>  
                         </form>    
                </div> 
            ))}
            {/* <button onClick={handleSubmit}>Submit Quiz</button>  */}
        </div>
    )
}

export default CreateQuiz