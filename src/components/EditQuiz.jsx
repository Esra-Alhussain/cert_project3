

const EditQuiz = ({ quizData, setQuizData ,handleQuestionTextChange, handleAddQuestion, deleteQuestion, questionIndexes, handleAddName, handleAnswerTextChange, saveQuiz}) => {
  
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
            {quizData.map((quiz, index) => (
                       <><div key={quiz.id} className="questions&answers">
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


            <button className="saveQuiz" onClick={saveQuiz}>Save Quiz</button> 
        </div>
    )
}

export default EditQuiz