import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import React, { useState } from 'react';

/**
 * Importing other components
 */
import Home from './components/Home';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import DoQuiz from './components/DoQuiz'
import EditQuiz from './components/EditQuiz'
import Discovery from './components/Discovery'
// import { v4 as uuidv4 } from 'uuid';


const App = () => {
    // State to manage quiz data
    const [quizData, setQuizData] = useState([
   
   {
    id: 1, //Generate a unique ID for the quiz object
    name:'Math Quiz',
    difficulty:'',
    subject:'',
    highestScore:'',
    likes: 0,
    questions: [
        {
            id:1, // Generate a unique ID for the question object
            question:'',
            answers:[],
            correctAnswers:'',
            points:0
        }
    ]
 },
   {
    id: 2, //Generate a unique ID for the quiz object
    name:'History Quiz',
    difficulty:'',
    subject:'',
    highestScore:'',
    likes: 0,
    questions: [
        {
            id:1, // Generate a unique ID for the question object
            question:'',
            answers:[],
            correctAnswers:'',
            points:0
        }
    ]
 }
  ]);


   // Generate unique indexes for questions
  //  const questionIndexes = Array.from(Array(quizData.questions.length).keys());

 //question.length+1
  //Functions for Quiz editing 
  //Delete Quiz
  const deleteQuiz = (quizId) => {
    //filter out the Quiz with the specified Id
    const updatedQuizzes = quizData.filter((quiz) => {
      if (quiz.id === quizId) {
        return false;
      } else {
        return true;
      }
    });
    setQuizData(updatedQuizzes);
  };

  //Delete a Question and their answers from a Quiz
  const deleteQuestion = ( questionId) => {
    //filter out the Question with the specified Id
    const updatedQuestionsAfterDelete = quizData.questions.filter((question) => {
      if (question.id === questionId){
        return false;
      } else {
        return true;
      }
    });

    setQuizData(prevState => ({
      ...prevState,
      questions: updatedQuestionsAfterDelete
    }));
    console.log(`this is index ${index}`);
    alert("Question deleted!")
  };

  //handle the input change for the question text
  const handleQuestionTextChange = ( index, newText ) => {
    setQuizData(prevState => {
        const updatedQuestions = [...prevState.questions];
        //check first if the index is valid for the updatedQuestions Array
        if (index >= 0 && index < updatedQuestions.length) { // Check if index is valid
          updatedQuestions[index].question = newText;
          return { ...prevState, questions: updatedQuestions };
        } else {
          console.error('Invalid question index');
          console.log(`this is index ${index}`);
          return prevState; // Return previous state unchanged
        }
      });
  };

  //handle the input change for the answer text
  const handleAnswerTextChange = ( questionIndex, answerIndex, newAnswer ) => {
    setQuizData(prevData => {
      const updatedAnswersQuestions = [...prevData.questions];
      // if (questionIndex >= 0 && questionIndex < updatedAnswersQuestions.length &&
      //     answerIndex >= 0 && answerIndex < updatedAnswersQuestions[questionIndex].answers.length
      //     ){
      //       //update the answer text at the specified question and answer index
      //       updatedAnswersQuestions[questionIndex].answers[answerIndex] = newAnswer;
      //     return { ...prevData, questions: updatedAnswersQuestions};
      //   } else {
      //     console.error('Invalid questions or answers index');
      //     console.log(`this is questionIndex ${questionIndex}`);
      //     console.log(`this is answerIndex ${answerIndex}`);
      //     return prevData;
      //   }
            updatedAnswersQuestions[questionIndex].answers[answerIndex] = newAnswer;
            return { ...prevData, questions: updatedAnswersQuestions};
      });
    };

  //Add a new question object to the questions Array in the state
  // const handleAddQuestion = () => {
  //   const newQuestionId = uuidv4();
  //       setQuizData(prevQuizData => ({
  //           ...prevQuizData,
  //           questions: [
  //               ...prevQuizData.questions,
  //               {
  //                 id:newQuestionId,
  //                question: '',
  //                answers:[], 
  //                correctAnswer:'',
  //                points:0
  //               }
  //           ]
  //       }));
  //   };

  //handle adding a name to the quiz
  const handleAddName = (event) => {
    setQuizData({ ...quizData, name:event.target.value });
  };

  //Add new answers to a question
  // const AddAnswers = (questionIndex) => {
  //     const updatedAnswers = [...quizData.questions[questionIndex].answers];
  //     //Generate a unique ID for the new answer
  //     //Add new empty answer array to the answers array
  //     updatedAnswers.push('');
  //     //create a copy of the quizData object and update the answers array for the specified question
  //       setQuizData(prevState => {
  //           const updatedQuizData = { ...prevState};
  //           updatedQuizData.questions[questionIndex].answers = updatedAnswers;
  //           return updatedQuizData;
  //       });
  // };

  //function allows the user to edit the answers 
  const handleAnswerEdit = (questionIndex, answerIndex, updatedAnswer) => {
    const updatedQuestions = [...questions]
    updatedQuestions[questionIndex].answers[answerIndex] = updatedAnswer;
    setQuizData (updatedQuestions)
};

  

    //function to handle changes in the Quiz name
  //   const handleQuizNameChange = (event)=> {
  //     setQuizData({...quizData, name:event.target.value });
  //     console.log(`This is quizData: ${quizData}`)
  // };


    //function allows the user to edit the text of the question 
  const handleQuestionEdit = (index, updatedQuestion) => {
      //update the question at the specified index in the questions Array by iterating over each question
      //map function returns a new array with the updated question at the specified index
      setQuizData(questions.map((question, i ) => (i === index ? updatedQuestion : question )));
  };

  //handle saving the quiz
  // const saveQuiz = (newQuiz ) => {
  //   //bring all the data entered by the user
  //   const quizTitle= quizData.name;
  //   const questions = quizData.questions;
  //   const answers = quizData.questions.answers;
  //   const correctAnswers = quizData.questions.answers.correctAnswers;
  //   const pointPerQuestion= quizData.questions.answers.points;

  //   console.log("Quiz Title:", quizTitle);
  //   console.log("Questions:", questions);

  //   setQuizData(prevData => ({
  //     ...prevData,
  //     name: quizTitle,
  //     questions: questions,
  //     answers: answers,
  //     correctAnswers: correctAnswers,
  //     points: pointPerQuestion
  //   }));

  // }

  const createQuiz = (e) => {
    //get the QuizName and then update the state with it 
    e.preventDefault();
    const newQuiz = {
      id: quizData.length+1,
      name: e.target.quizTitle.value,
      difficulty: '',
      subject: '',
      highestScore: '',
      likes: 0,
      questions: [ ]
  };
  const newQuizData = quizData.concat(newQuiz)
  setQuizData(newQuizData);

  //update the state to include the new quiz object
  // setQuizData(prevData => [...prevData, newQuiz])
  console.log("clicked")
  }

  const saveQuiz = () => {
    return{ }
    alert("Quiz saved successfully!");
  }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
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
       
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
            Furthermore, notice how the content above always renders? On each page? */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard quizData={ quizData } createQuiz={createQuiz} deleteQuiz={deleteQuiz}/>} />
          {/* <Route path="/doQuiz" element={<DoQuiz />} /> */}
          {/* <Route path="/editQuiz" element={<EditQuiz quizData= { quizData } setQuizData = { setQuizData } handleAddName= { handleAddName } handleAddQuestion={ handleAddQuestion } handleQuestionTextChange={ handleQuestionTextChange }  handleAnswerTextChange={ handleAnswerTextChange } deleteQuestion={ deleteQuestion } />} /> */}
        </Routes>
        {/* saveQuiz={ saveQuiz} */}
      </div>
    </Router>
  );
}

export default App