
const EditQuiz =({quiz, addQuestionToQuiz}) => {
    console.log("quiz:", quiz);
    return(
        <div className="editQuiz">
             <h2>Quiz name :</h2><h2 className="quizTitle">{quiz.name}</h2>
           <div  className="quizQuestions">
             <h3>{quiz.questions[0].question}</h3>
             <h4>The Answers:</h4> 
             
             <ul>
                <li>{quiz.questions[0].answers[0]}</li>
                <li>{quiz.questions[0].answers[1]}</li>
                <li>{quiz.questions[0].answers[2]}</li>
                <li>{quiz.questions[0].answers[3]}</li>
             </ul>
              {/* <button className="Delete" onClick={() => { deleteQuestion(quizData.questions[index].id); } }> Delete Question </button> */}

           </div>

           <div className="editQuiz">
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
        </div>
    )
}

export default EditQuiz