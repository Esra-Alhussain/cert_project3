

const CreateQuiz = ({ quizData, setQuizData ,handleQuestionTextChange, handleAddQuestion, questionIndexes, handleAddName, handleAnswerTextChange}) => {
  
    return(
        <div className="createQuiz">
          {/* Sidebar with question list */}
            {/* <div className="sideBar">
                {questionIndexes.map(index => (
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
             ))}
                
            </div> */}
             <div className="quizTitle">
                <label htmlFor="quizTitle">Quiz Title</label>
                <input type="text"  id="quizTitle" name="quizTitle" placeholder="Enter the Quiz title" onChange={handleAddName}/>
            </div>
            <button className="addQuestion" onClick={handleAddQuestion} >Add Question</button>
            {questionIndexes.map((index) => (
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
                            <button className="Delete"> Delete</button> 
                         </form>    
                </div> 
            ))}
            <button className="saveQuiz">Save Quiz</button> 
        </div>
    )
}

export default CreateQuiz