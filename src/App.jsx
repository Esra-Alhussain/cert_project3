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
import Discovery from './components/Discovery'
import PlayQuiz from './components/PlayQuiz';

import './styles/app.css';

const App = () => {
    // State to manage quiz data
    const [quizData, setQuizData] = useState([
      {
        id: 1,
        name: 'Math Quiz',
        difficulty: '',
        subject: '',
        highestScore: 0,
        likes: 0,
        questions: [
          {
            id: 1,
            question: 'What is 2 + 2?',
            answers: ['3', '4', '5', '6'],
            correctAnswer: '4',
            points: 2,
          },
          {
            id: 2,
            question: 'What is the square root of 16?',
            answers: ['2', '4', '6', '8'],
            correctAnswer: '4',
            points: 2,
          },
        ]//quiz.question.length+1
     },
      {
        id: 2,
        name: 'History Quiz',
        difficulty: '',
        subject: '',
        highestScore: 5,
        likes: 0,
        questions: [
          {
            id: 1,
            question: 'What is the name of the USA president?',
            answers: ['Biden', 'Trump', 'Jordan', 'Ahmad'],
            correctAnswer: 'Biden',
            points: 2,
          },
          {
            id: 2,
            question: 'What is the capital of Canada?',
            answers: ['Toronto', 'Ottawa', 'Montreal', 'Vancouver'],
            correctAnswer: 'Ottawa',
            points: 2,
          },
        ],
      },
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
        // Check if the quiz exists in local storage
        const quizTitle = quiz.name;
        const quizDataString = localStorage.getItem(quizTitle);

        if (quizDataString){
          //Remove the quiz data from local storage
          localStorage.removeItem(quizTitle);
        }
        return false;
      } else {
        return true;
      }
    });
    setQuizData(updatedQuizzes);
  };

  //Delete a Question and their answers from a Quiz
    const deleteQuestion = (questionId) => {
  // Filter out the question with the specified ID
    const updatedQuizzes = quizData.map(quiz => {
    // Filter out the question from each quiz's questions array
    const updatedQuestions = quiz.questions.filter(question => question.id !== questionId);
    return { ...quiz, questions: updatedQuestions };
  });
  // Update the state with the updated quiz data
  setQuizData(updatedQuizzes);
  alert("Question deleted!")
};

    //     // Filter out the question with the specified ID
    //     const updatedQuestions = quiz.questions.filter((question) => {
    //       if (question.id !== questionId){
    //         return true;   //Keep the question if its ID doesnot match
    //       }else{
    //         return false;  //Exclude the question if its ID matches
    //       }     
    //   });
    //  // Update the quiz object with the updated questions array
    //  const updatedQuiz ={...quiz, quesions:updatedQuestions};

    // // Update the state with the updated quiz object
    // setQuizData((prevQuizSata) => {
    //   const updatedQuizData = prevQuizSata.map((q) => {
    //     //if this is the quiz we are updating, return the updated quiz
    //     if(q.id === quiz.id){
    //       return updatedQuiz;
    //     }
    //     //otherwise return the original quiz
    //     return q;
    //   });
    //   console.log(`delete question:,${updatedQuizData}`)

    //   // Concatenate the updated quiz data with an empty array to ensure it's treated as a new object
    //   return [].concat(updatedQuizData);
    // });
    // alert("Question deleted!")
  // };

  //handle the input change for the question text
  // const handleQuestionTextChange = ( index, newText ) => {
  //   setQuizData(prevState => {
  //       const updatedQuestions = [...prevState.questions];
  //       //check first if the index is valid for the updatedQuestions Array
  //       if (index >= 0 && index < updatedQuestions.length) { // Check if index is valid
  //         updatedQuestions[index].question = newText;
  //         return { ...prevState, questions: updatedQuestions };
  //       } else {
  //         console.error('Invalid question index');
  //         console.log(`this is index ${index}`);
  //         return prevState; // Return previous state unchanged
  //       }
  //     });
  // };

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
  // const handleAddName = (event) => {
  //   setQuizData({ ...quizData, name:event.target.value });
  // };

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
//   const handleAnswerEdit = (questionIndex, answerIndex, updatedAnswer) => {
//     const updatedQuestions = [...questions]
//     updatedQuestions[questionIndex].answers[answerIndex] = updatedAnswer;
//     setQuizData (updatedQuestions)
// };

  

//     //function to handle changes in the Quiz name
//   //   const handleQuizNameChange = (event)=> {
//   //     setQuizData({...quizData, name:event.target.value });
//   //     console.log(`This is quizData: ${quizData}`)
//   // };


//     //function allows the user to edit the text of the question 
//   const handleQuestionEdit = (index, updatedQuestion) => {
//       //update the question at the specified index in the questions Array by iterating over each question
//       //map function returns a new array with the updated question at the specified index
//       setQuizData(questions.map((question, i ) => (i === index ? updatedQuestion : question )));
//   };


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

     // Reset the form fields 
     e.target.reset();
     alert("Question added successfully!");
  }

  //edit Quiz feature
  const editQuiz = (e, quizId) => {
    e.preventDefault();

    // Extracting data entered by the user
    // const quizTitle= e.target.quizTitle.value;
    const questionId = parseInt(e.target.ID.value);   //Get the question ID from the input
    const question = e.target.question.value;
    const answers = [
       e.target.answer1.value,
       e.target.answer2.value,
       e.target.answer3.value,
       e.target.answer4.value
      ];
    const correctAnswers = e.target.correctAnswers.value;
    const pointPerQuestion= e.target.points.value;

    // console.log("Quiz Title:", quizTitle);
    console.log("Questions:", question);
    console.log("questionId:", questionId);

  //   // Constructing the new question object
  //   const newQuestion = {
  //     id: questionId,
  //     question: questions,
  //     answers: answers,
  //     correctAnswers: correctAnswers,
  //     points: pointPerQuestion
  // };
    //Update the specific question in the quiz data
    const updateQuizData = quizData.map(quiz => {
      if (quiz.id === quizId){
        const updatedQuestions = quiz.questions.map(q => {
          if (q.id === questionId){
            console.log("questionId:", questionId);

            return{
              ...q,
              question: question,
              answers: answers,
              correctAnswers: correctAnswers,
              points: pointPerQuestion
            };
            
          }else{
            console.log("the id is not found:", questionId);
            console.log("this is the q:", q);

            return q;
          }
        });
        return {...quiz, questions: updatedQuestions};
      }else{
        return quiz;
      }
    });
    
    // Updating the quiz data state with the new quiz object
    console.log("questionId:", questionId);

    setQuizData(updateQuizData);
    console.log("updateQuizData:", updateQuizData);
    console.log("updated")
    // Reset the form fields 
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

   //function to load the quiz data from local storage
   const loadQuiz =(e,quizTitle) => {
    e.preventDefault();

    try{
      //Retrive the JSON string from local storage
      const quizDataString= localStorage.getItem(quizTitle);

      //parse the JSON string back into JS objects
      if(quizDataString){
        const parsedQuizData = JSON.parse(quizDataString);

        //update the quizData state by appending the loaded data
        setQuizData(prevQuizState => [...prevQuizState, parsedQuizData]);

        console.log('quizDataString',quizDataString)
        console.log('Quiz data loaded successfully:', parsedQuizData);
        console.log('quizData',quizData)

        alert("Quiz data loaded successfully!")
      }else{
        console.log('Quiz data not found for title:', quizTitle);
        console.log('quizTitle:', quizTitle);

        alert('Quiz not found in local storage!');
      }
    }catch(error){
      console.error('Error loading quiz:', error);
      alert("Failed to load quiz!")
    }
  };

  const saveQuiz = (quizTitle) => {
    console.log('quiztitle:', quizTitle);

      const quizToSave = quizData.find(quiz => quiz.name === quizTitle);
      if(quizToSave){
         try{

          //Convert quizData to a JSON string
          //Save the JSON to local storage
          localStorage.setItem(quizTitle, JSON.stringify(quizToSave));
          console.log('quiztitle:', quizTitle);
          console.log('quizDataString:', quizToSave);

          alert("Quiz saved successfully!")
        }catch(error){
          //Handle any errors that occurs during saving
          console.error('Error saving quiz:',error);
          alert("Failed to save a quiz!");
        }
     }else {
      alert('Quiz not found!');
     };
  };


  //update the score in the quizData state
  // const updateScore =(quizId, score) =>{
  //   setQuizData(prevQuizState => prevQuizState.map(quiz => {
  //     if(quiz.id === quizId){
  //       //update the highestScore property if the new score is higher
  //       if(score > quiz.highestScore){
  //         return {...quiz, highestScore: score };
  //       }
  //     }
  //     return quiz;
  //   }));
  // };

//   const calculateScore = () => {
//     let totalScore = 0;
//     quiz.questions.forEach(question => {
//         if (question.correctAnswer === selectedAnswer) {
//             totalScore += question.points;
//         }
//     });
//     return totalScore;
// };


//   const handleSubmit = () => {
//     const finalScore = calculateScore();
//     alert(`Your final score is: ${finalScore}`);
// };


//   const handleAnswerSubmission = (selectedAnswer, quiz, questionId) => {
//     // Find the question object in the quiz data based on the questionId
//     const question = quiz.questions.find(q => q.id === questionId);

//     // Check if the selected answer matches the correct answer in the question object
//     const isCorrectAnswer = selectedAnswer === question.correctAnswer;

//     // Update the score if the answer is correct
//     if (isCorrectAnswer) {
//         const newScore = quiz.points + 2; //each correct answer gives 2 points
//         updateScore(quiz.id, newScore);
//         //display an alert to inform the user about the correct answer
//         alert('Correct answer! Your score has been updated.');
//     } else {
//         // Display an alert to inform the user about the incorrect answer
//         alert('Incorrect answer! Try again.');
//     }
// };

// const handleAnswerSubmission= (e, selectedAnswer, quiz, index) => {
//   console.log('event',e)
//   try{
//     e.preventDefault(); // Prevent the default form submission behavior

//   }catch(error){
//     console.error('error',error)
//   }

  // console.log("inside the handleAnswerSubmission")
  // //Find the question object in the quiz data based on the questioId
  // const question = quiz.questions.find(q=> q.id === index);

  // //Get the value of the selected answer from the form submission event
  // const submittedAnswer = e.target.elements[`answers-${index}`].value;

  // //check if the submitted  answer matches the correct answer in the question object
  // const isCorrectAnswer = submittedAnswer === question.correctAnswer;

  // //Initialize a variable to hold the updated score 
  // let updatedScore = 0;

  // //Update the score if the answer is correct 
  // if (isCorrectAnswer) {
  //   //Increase the score by the points specified for the question
  //   updatedScore+= question.points;

  //   console.log("inside the handleAnswerSubmission")

  //   //Display an alert to inform the user about the score
  //   alert('Correct answer! Your score is:', updatedScore);
  // }else{
  // console.log("inside the handleAnswerSubmission")
  //   alert('Incorrect answer! Your score is:', updatedScore);
  // }

  // //Compare the updated score with the highest score in the quiz using the Math.max function that takes multiple arguments and returns the largest of them
  // const highestScore = Math.max(quiz.highestScore, updatedScore);

  // // Update the highestScore in the state if the updated score is higher
  // handleUpdateScore(highestScore);
// }

// let UserSelectedAnswer = null; // Variable to hold the selected answer
//



    // let score = 0; // Variable to hold the current score

    // // Compare the submitted answer with the correct answer
    //  if (submittedAnswer === quiz.question.correctAnswer) {
    //     // Calculate the score
    //      score += quiz.question.points;

    //     // Check if the score is higher than the highest score
    //     if (score > quiz.highestScore) {
    //         // Update the highest score in quizData
    //         quiz.highestScore = score;
    //     }

    //     // Display an alert for a correct answer
    //     alert('Correct answer! Your score is: ' + score);
    // } else {
    //     // Display an alert for an incorrect answer
    //     alert('Incorrect answer! Try again.');
    // }


    ///////////////////////////////////////

  // Function to update the highest score in the parent component
  const updateHighestScore = (quizId, totalScore) => {
    setQuizData((prevQuizData) =>
      prevQuizData.map((quiz) =>
        quiz.id === quizId ? { ...quiz, highestScore: totalScore } : quiz
      )
    );
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
          <Route path="/home/*" element={<Home quizData={quizData}  updateHighestScore={updateHighestScore} />} />
          <Route path="/dashboard/*" element={<Dashboard quizData={ quizData } createQuiz={createQuiz} addQuestionToQuiz={addQuestionToQuiz} deleteQuiz={deleteQuiz} deleteQuestion={deleteQuestion} editQuiz={editQuiz} saveQuiz={saveQuiz} loadQuiz={loadQuiz} />} />
          <Route path="/playQuiz/:id" element={<PlayQuiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App