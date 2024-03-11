

const CreateQuiz = () => {
    // State to manage quiz data
    const [quizData, setQuizData] = useState({
        id:'',
        name:'',
        difficulty:'',
        subject:'',
        highestScore:'',
        likes: 0,
        questions: [
            {
                id:'',
                question:'',
                answers:[],
                correctAnswers:'',
                points:0
            }
        ]
    });

    const [questions, setQuestions] = useState(
        [
            {
            id:'',
            question:'',
            answers:[],
            correctAnswers:'',
            points:0
        }
    ]
    );

    //function to handle changes in the Quiz name
    const handleQuizNameChange = (event)=> {
        setQuizData({...quizData, name:event.target.value });
    };

     //Add a new question object to the questions Array in the state
     const handleQuestionAdd = () => {
         setQuizData({
             ...quizData,
             questions: [
                 ...quizData.questions,
                 {id:'',
                  question: '',
                  answers:[], 
                  correctAnswer:'',
                  points:0
                 }
             ]
         })
     };

      //function allows the user to edit the text of the question 
    const handleQuestionEdit = (index, updatedQuestion) => {
        //update the question at the specified index in the questions Array by iterating over each question
        //map function returns a new array with the updated question at the specified index
        setQuizData(questions.map((question, i ) => (i === index ? updatedQuestion : question )));
    };

    //function allows the user to edit the answers 
    const handleAnswerEdit = (questionIndex, answerIndex, updatedAnswer) => {
        const updatedQuestions = [...questions]
        updatedQuestions[questionIndex].answers[answerIndex] = updatedAnswer;
        setQuizData (updatedQuestions)
    };

    

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
                            <label htmlFor="question">Question</label>
                            <input type="text" id="question" name="question" placeholder="Enter your Question"/>
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
            </div>  
        </div>
    )
}

export default CreateQuiz