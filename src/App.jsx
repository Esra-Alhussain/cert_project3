import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

/**
 * Importing other components
 */
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import DoQuiz from './components/DoQuiz'
import CreateQuiz from './components/EditQuiz'
import Discovery from './components/Discovery'

const App = () => {
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

  //Functions for Quiz editing 
  //Delete Quiz
  const deleteQuiz = (quizId) => {
    //remove the quiz that match the quiz Id that have been selected
    //filter out the Quiz with the specified Id
    const updatedQuestions = quizData.filter((quiz) => {
      if (quiz.id === quizId) {
        return false;
      } else {
        return true;
      }
    });
  }

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

  //function allows the user to edit the answers 
  const handleAnswerEdit = (questionIndex, answerIndex, updatedAnswer) => {
    const updatedQuestions = [...questions]
    updatedQuestions[questionIndex].answers[answerIndex] = updatedAnswer;
    setQuizData (updatedQuestions)
};

  

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
           
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
          </ul>
        </nav>
        <Discovery />
       
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
            Furthermore, notice how the content above always renders? On each page? */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doQuiz" element={<DoQuiz />} />
          <Route path="/createQuiz" element={<CreateQuiz />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App