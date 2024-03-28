import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importing useSelector

/**
 * Importing other components
 */
import Home from './components/Home';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Discovery from './components/Discovery'
import PlayQuiz from './components/PlayQuiz';

import './styles/app.css';

import { 
  deleteQuiz, 
  deleteQuestion,  
  addQuestion, 
  editQuestion, 
  createQuiz, 
  saveQuiz,
  updateHighestScore,
  loadQuizData }
  from './state/MainStateSlice';

const App = () => {
  //connect the component to redux to access the state and to make it able to dispatch some actions
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.main.quizData);
  
  //Delete Quiz
  const deleteQuiz = (quizId) => {
      // Dispatch the deleteQuiz action with the quiz ID
      dispatch(deleteQuiz(quizId));
  };

  //Delete a Question and their answers from a Quiz
  const deleteTheQuestion = (quizId,questionId) => {
  dispatch(deleteQuestion({ quizId, questionId }));
  alert("Question deleted!")
};


const addQuestionToQuiz=(e,quizId,questionId)=>{
  e.preventDefault();
  console.log('clicked');
    console.log('event',e);
    console.log('quizId',quizId);
  const newQuestion = {
    id: questionId,
    question: e.target.question.value,
    answers: [
      e.target.answer1.value,
      e.target.answer2.value,
      e.target.answer3.value,
      e.target.answer4.value,
    ],
    correctAnswers: e.target.correctAnswers.value,
    points: e.target.points.value,
  };
  // Dispatch the action to add the new question to the quiz
  dispatch(addQuestion({ quizId, question: newQuestion }));
  // Reset the form fields
  e.target.reset();
  alert('Question added successfully!'); 
  };

  //edit Quiz feature
  const editQuestionInQuiz = (e, quizId) => {
    e.preventDefault();
    console.log('quizId',quizId)

    // Extracting data entered by the user
    const questionId = parseInt(e.target.id.value);
    const question = e.target.question.value;
  
    const answers = [
       e.target.answer1.value,
       e.target.answer2.value,
       e.target.answer3.value,
       e.target.answer4.value
    ];
    const correctAnswers = e.target.correctAnswers.value;
    const pointPerQuestion = e.target.points.value;

    console.log('questionId',questionId)
    console.log('correctAnswers',correctAnswers)
    console.log('question',question)
    console.log('answers',answers)

    // Dispatch the action to edit the question in the quiz
    dispatch(editQuestion({ quizId, questionId, question, answers, correctAnswers, pointPerQuestion }));
    alert("Quiz updated successfully!");

    // Reset the form fields 
    e.target.reset();
  };

  const createNewQuiz = (e) => {
    e.preventDefault();
  const newQuiz = {
    id: quizData.length + 1,
    name: e.target.quizTitle.value,
    difficulty: '',
    subject: '',
    highestScore: '',
    likes: 0,
    questions: [],
  };
  console.log('newQuiz',newQuiz)

  dispatch(createQuiz(newQuiz));
  console.log("clicked");
  console.log('newQuiz',newQuiz)

  };

   //function to load the quiz data from local storage
   const loadQuiz =(e,quizTitle) => {
    e.preventDefault();

    try{
      //Retrive the JSON string from local storage
      const quizDataString=JSON.parse(localStorage.getItem(quizTitle));
      console.log('quizDataString:', quizDataString);

      //parse the JSON string back into JS objects
      if(quizDataString){
        console.log('name inside load :', quizDataString.name);

        const newLoadedQuiz = {
          id: quizDataString.id,
          name: quizDataString.name,
          difficulty:quizDataString.difficulty,
          subject: quizDataString.subject,
          highestScore:quizDataString.highestScore,
          likes:quizDataString.likes,
          questions:[]
        }
    
        // Dispatch the loadQuizData action with the parsed quiz data'
        console.log('newLoadedQuiz:', newLoadedQuiz);

        dispatch(loadQuizData(newLoadedQuiz));

        alert("Quiz data loaded successfully!")
        return
      }else{
        console.log('Quiz data not found for title:', quizTitle);
        alert('Quiz not found in local storage!');
      }
    }catch(error){
      console.error('Error loading quiz:', error);
      alert("Failed to load quiz!")
    }
  };

  const saveQuiz = (quizTitle) => {
     // Find the quiz object in quizData array whose name matches the given quizTitle
     const quizToSave = quizData.find((quiz) => quiz.name === quizTitle);

     // Check if a quiz object with the given title was found
     if (quizToSave) {
        //save the quiz object to the local storage after converting it to a JSON string
        try{
          localStorage.setItem(quizTitle, JSON.stringify(quizToSave));
          // Display a success message if the quiz was saved successfully
          alert("Quiz saved successfully!");
        }
          // Catch any errors that occur during the saving process
          catch(error) {
            console.error('Error saving quiz:', error);
            // Display an error message if saving the quiz failed
            alert("Failed to save a quiz!");
          }
     } 
      // If no quiz object with the given title was found, display a message indicating that the quiz was not found
     else {
       alert('Quiz not found!');
     };
  };

  // Function to update the highest score in the parent component
  const handleUpdateHighestScore = (quizId, totalScore) => {
    // Dispatch an action containing the quiz ID and the new total score
    dispatch(updateHighestScore({ quizId, totalScore })); // Dispatch the action
    console.log(`Inside the update function`)

  };

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
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home/*" element={<Home quizData={quizData}  handleUpdateHighestScore={handleUpdateHighestScore} />} />
          <Route path="/dashboard/*" element={<Dashboard quizData={quizData} createNewQuiz={createNewQuiz} addQuestionToQuiz={addQuestionToQuiz} deleteQuiz={deleteQuiz} deleteTheQuestion={deleteTheQuestion} editQuestionInQuiz={editQuestionInQuiz} saveQuiz={saveQuiz} loadQuiz={loadQuiz} />} />
          <Route path="/playQuiz/:id" element={<PlayQuiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App