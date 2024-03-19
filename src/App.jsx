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
    ]//quiz.question.length+1
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
            question:'What is the name of the USA president?',
            answers:['Biden', 'Trump', 'Jordan', 'Ahmad'],
            correctAnswers:'',
            points:0
        },
        {
          id:1, // Generate a unique ID for the question object
          question:'What is the name of Canada president?',
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
    // Find the quiz containing the question to be deleted
    const updatedQuizzes = quizData.map((quiz) => {
      if (quiz.id === questionId){
        // Filter out the question with the specified ID
        const updatedQuestions = quiz.questions.filter((question) => question.id !== questionId);
            return { ...quiz, questions: updatedQuestions };
      }else{
        return quiz;
      }
    })
    //filter out the Question with the specified Id
    // const updatedQuestionsAfterDelete = quizData.questions.filter((question) => {
    //   {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });
    // Update the state with the updated quizzes data
    setQuizData(updatedQuizzes);
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


  const addQuestionToQuiz=(e,quizId,questionId)=>{
    //Get the Quiz ID and the Question ID
    e.preventDefault()
    console.log('clicked');
    console.log('event',e);
    console.log('quizId',quizId);
    console.log('target',e.target);
    console.log('questionId',questionId);

    //Update the state with the new question
    const newQuestion = {
      id: questionId,
      question: e.target.question.value,
      answers: [
        e.target.answer1.value,
        e.target.answer2.value,
        e.target.answer3.value,
        e.target.answer4.value,
      ],
      correctAnswers:e.target.correctAnswers.value,
      points: e.target.points.value,
    };
    //Find the quiz in the QuizData state by its ID
    const updatedQuizData = quizData.map(quiz=> {
      if(quiz.id === quizId){
        //Add the new Question to the questions array of this quiz
        return{
          ...quiz,
          questions: [...quiz.questions, newQuestion]
        };
      }
      return quiz;
    });
    //Update the state with the updated quiz data 
    setQuizData(updatedQuizData);
    console.log(`quizData,${quizData}`)
  }
  //handle saving the quiz
  const editQuiz = (e ) => {
    e.preventDefault();

    // Extracting data entered by the user
    // const quizTitle= e.target.quizTitle.value;
    const questions = e.target.question.value;
    const answers = [
       e.target.answer1.value,
       e.target.answer2.value,
       e.target.answer3.value,
       e.target.answer4.value
      ];
    const correctAnswers = e.target.correctAnswers.value;
    // const pointPerQuestion= e.target.points.value;

    // console.log("Quiz Title:", quizTitle);
    console.log("Questions:", questions);

    // Generating a unique ID for the new question
    const questionId = uuidv4();

    // Constructing the new question object
    const newQuestion = {
      id: questionId,
      question: questions,
      answers: answers,
      correctAnswers: correctAnswers,
      points: pointPerQuestion
  };
    // Constructing the new quiz object with the updated question
    const updateQuiz ={
      name: quizTitle,
      questions: [
        ...quizData.questions,newQuestion]  
       };
    
    // Updating the quiz data state with the new quiz object
    setQuizData(prevQuizData => [...prevQuizData, updateQuiz]);

    console.log("updated")
    // Reset the form fields or perform any other necessary actions
    e.target.reset();
    alert("Quiz updated successfully!");
  }

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
          <Route path="/dashboard/*" element={<Dashboard quizData={ quizData } createQuiz={createQuiz} addQuestionToQuiz={addQuestionToQuiz} deleteQuiz={deleteQuiz} deleteQuestion={deleteQuestion}/>} />
          {/* <Route path="/doQuiz" element={<DoQuiz />} /> */}
          {/* <Route path="/editQuiz" element={<EditQuiz quizData= { quizData } setQuizData = { setQuizData } handleAddName= { handleAddName } handleAddQuestion={ handleAddQuestion } handleQuestionTextChange={ handleQuestionTextChange }  handleAnswerTextChange={ handleAnswerTextChange } deleteQuestion={ deleteQuestion } />} /> */}
        </Routes>
        {/* saveQuiz={ saveQuiz} */}
      </div>
    </Router>
  );
}

export default App