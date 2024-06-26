
const EditQuiz =({quiz, addQuestionToQuiz,deleteTheQuestion, editQuestionInQuiz}) => {
    console.log("quiz:", quiz);
    return(
        <div className="editQuiz">
            <div className="quizDisplay">
                <div className=""></div>
            <h2>Quiz name :</h2><h2 className="quizTitle">{quiz.name}</h2>
            {quiz.questions.map((question, index) => (
                <div key={index}>
                  <h3>Question: {question.question}</h3>
                  <h4>The Answers:</h4> 
                  <ul>
                  {question.answers.map((answer, ansIndex) => 
                        <li key={ansIndex}>{answer}</li>
                    )}
                  </ul>
                  <button className="deleteBtn" onClick={() => { deleteTheQuestion(quiz.id,question.id); } }> Delete Question </button>
                </div>
                 ))}   
            </div>
           <br/>
           <div className="addQuestion">
            <h2>Add Question: </h2>
              <form className="editQuizForm" onSubmit={(e) =>addQuestionToQuiz(e,quiz.id,quiz.questions.length+1)}>
                 {/* <button className="addQuestion" onClick={handleAddQuestion} >Add Question</button> */}
                    <input type="text"  name="question" placeholder="Enter the Question" />
                {/* <div key={uuidv4()}>
                    <label htmlFor={uuidv4()} >Question ID</label>
                    <input type="text" id={uuidv4()} name="questionId" placeholder="Enter the Question ID" />
                </div> */}
                <div>
                    <input type="text"  name="correctAnswers" placeholder="Enter the correct answer" />
                </div>
                <div>
                    <input type="text" name="answer1" placeholder="Enter the answer" />
                 </div>
                 <div >
                    <input type="text"name="answer2" placeholder="Enter the answer" />
                </div>
                
                  <div >
                 <input type="text"  name="answer3" placeholder="Enter the answer" />
                 </div>
                 <div >
                 <input type="text"  name="answer4" placeholder="Enter the answer" />
                 </div>
                 <div >
                 <input type="number"  name="points" placeholder="Enter the points per Quesstion" />
                 </div>
                 <button className="addQuestion" type="submit"> Add new Question </button>

              </form>   
           </div>

           <div className="editQuestion">
            <h2>Edit Question: </h2>
              <form className="editQuizForm" onSubmit={(e) => editQuestionInQuiz(e,quiz.id)}>
                 {/* <button className="addQuestion" onClick={handleAddQuestion} >Add Question</button> */}
                    <input type="text"  name="question" placeholder="Enter the Question" />
              
                <div>
                    <input type="number"  name="id" placeholder="Enter the question ID to edit" />
                </div>
                <div>
                    <input type="text"  name="correctAnswers" placeholder="Enter the correct answer" />
                </div>
                <div>
                    <input type="text" name="answer1" placeholder="Enter the answer" />
                 </div>
                 <div >
                    <input type="text"name="answer2" placeholder="Enter the answer" />
                </div>
                
                  <div >
                 <input type="text"  name="answer3" placeholder="Enter the answer" />
                 </div>
                 <div >
                 <input type="text"  name="answer4" placeholder="Enter the answer" />
                 </div>
                 <div >
                 <input type="number"  name="points" placeholder="Enter the points per Quesstion" />
                 </div>
                 <button className="addQuestion" type="submit"> Edit the Question </button>
              </form>   
           </div>
        </div>
    )
}

export default EditQuiz