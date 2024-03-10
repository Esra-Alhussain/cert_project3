

const CreateQuiz = () => {
    

    return(
        <div className="createQuiz">
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

                <button className="addQuestion">Add Question</button>
            </div>

            <div className="questions&answers">
                <h1 className="quizTitle">The Weather </h1>
                    <div className="" >
                        <form className="createQuizForm">
                            <label for="question">Q1</label>
                            <input type="text" id="question" name="question" placeholder="Enter your Question"/>
                            <div className="answers">
                                <input type="checkbox" id="answer1" name="answer" placeholder="Enter your first answer"/>
                                <input type="checkbox" id="answer2" name="answer" placeholder="Enter your second answer"/>
                                <input type="checkbox" id="answer3" name="answer" placeholder="Enter your third answer"/>
                                <input type="checkbox" id="answer4" name="answer" placeholder="Enter your fourth answer"/>
                            </div>  
                         </form>    
                    </div>
            </div>  
        </div>
    )
}

export default CreateQuiz