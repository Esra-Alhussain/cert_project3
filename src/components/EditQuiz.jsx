

const EditQuiz =({quiz}) => {
    
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
              <button className="Delete" onClick={() => { deleteQuestion(quizData.questions[index].id); } }> Delete Question </button>

           </div>

           <div className="editQuiz">
            <h2>Edit The Quiz: </h2>
              <form className="editQuizForm">
                 <button className="addQuestion" onClick={handleAddQuestion} >Add Question</button>
                    <label htmlFor={`question${quiz.length+1}`}>Question</label>
                    <input type="text" id={`question${quiz.length+1}`} name="question" placeholder="Enter your Question" />
                <div>
                    <label htmlFor={`answer${quiz.length+1}`}>Answer</label>
                    <input type="text" id={`answer${quiz.length+1}`} name="question" placeholder="Enter your Question" />
                 </div>
                 <div>
                    <label htmlFor={`answer${quiz.length+1}`}>Answer</label>
                    <input type="text" id={`answer${quiz.length+1}`} name="question" placeholder="Enter your Question" />
                </div>
                 <div>
                     <label htmlFor={`answer${quiz.length+1}`}>Answer</label>
                 <input type="text" id={`answer${quiz.length+1}`} name="question" placeholder="Enter your Question" />
               
                 </div>
                  <div>
                 <label htmlFor={`answer${quiz.length+1}`}>Answer</label>
                 <input type="text" id={`answer${quiz.length+1}`} name="question" placeholder="Enter your Question" />
                 </div>
                 <button className="submitQuiz" onClick={() => { submitQuiz(quizData.questions[index].id); } }> Submit Quiz </button>

              </form>                
           </div>
        </div>
    )
}

export default EditQuiz