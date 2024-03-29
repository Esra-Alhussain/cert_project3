
import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  quizData: [
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
      ] 
   },
    {
      id: 2,
      name: 'History Quiz',
      difficulty: '',
      subject: '',
      highestScore: 0,
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
    ],
};

// Create main slice
const mainSlice = createSlice({
  name: "main",   //slice  name
  initialState,    //the state that is going to be the state that the slice will start with
  reducers: {
    // Reducer to delete a quiz by its ID
    deleteQuiz: (state, action) => {
        // The action payload contains the ID of the quiz to delete
        // Extract the quiz ID from the action payload
        const quizIdToDelete = action.payload; 
        // Use the filter method to remove the quiz with the specified ID from the state
        state.quizData = state.quizData.filter(quiz => quiz.id !== quizIdToDelete);
      },
    // Reducer to delete a question from a quiz by its ID  
    deleteQuestion: (state,action) => {
        // The action payload contains the IDs of the quiz and question to delete
        //Extract the quiz ID and question ID from the action payload
        const {quizId, questionId } = action.payload; 
        // Find the quiz by its ID in the state
        state.quizData = state.quizData.map(quiz => {
            if (quiz.id === quizId){
               // Use the filter method to remove the question with the specified ID from the quiz
               quiz.questions = quiz.questions.filter(question => question.id !- questionId);
            }
            return quiz;
        })
    },
    // Reducer to add a new question to a quiz
    addQuestion: (state,action) =>{
        //Extract the quiz ID and new question object from the action payload
        const { quizId, question } = action.payload; 

        // Find the quiz by its ID in the state
        const quizToUpdate = state.quizData.find(quiz => quiz.id === quizId);
            if(quizToUpdate){
                // If the quiz is found, push the new question into its questions array
                quizToUpdate.questions.push(question);
            }
    },


    editQuestion (state, action) {
      const { quizId, questionId, question, answers, correctAnswers, pointPerQuestion } = action.payload; // Extract the data from the action payload

      // Find the quiz by its ID in the state
      const quizToUpdate = state.quizData.find(quiz => quiz.id === quizId);
    
      // Check if the quiz is found
      if (quizToUpdate) {
        // Find the question within the quiz's questions array by its ID
        const questionToUpdate = quizToUpdate.questions.find(q => q.id === questionId);
        
        // Check if the question is found
        if (questionToUpdate) {
          // Update the question properties with the new data
          questionToUpdate.question = question;
          questionToUpdate.answers = answers;
          questionToUpdate.correctAnswer= correctAnswers;
          questionToUpdate.points = pointPerQuestion;
        }
      }
    },
  

    // Reducer to create a new quiz and add it to the state
    createQuiz(state, action) {
      // Payload contains the new quiz object to be created
        // Add the new quiz to the quizData array
        console.log("inside reducer")
        state.quizData.push(action.payload);
    },
    // Reducer to save a new quiz to the state 
    saveQuiz(state, action) {
        const saveQuiz = action.payload; // Extract the new quiz object from the action payload
        console.log('saveQuiz',saveQuiz)
        try {
            // Convert the new quiz object to a JSON string
            const quizString = JSON.stringify(saveQuiz);
            // Save the JSON string to local storage using the quiz name as the key
            localStorage.setItem(saveQuiz.name, quizString);
            // Display a success message if the quiz was saved successfully
            alert("Quiz saved successfully!");
            // Return the current state without modifying it
            return state;
          } catch (error) {
            // Handle any errors that occur during saving
            console.error('Error saving quiz:', error);
             // Display an error message if saving the quiz failed
             alert("Failed to save a quiz!");
            // Return the current state without modifying it
            return state;
          }
      },

       //Reducer to Update the highest score of a quiz 
      updateHighestScore (state, action) {
       // This reducer takes the current state and an action as parameters
       // The action payload contains the quiz ID and the new total score
       //Extract the quizId and new totalscore from the action payload
       const { quizId, totalScore }= action.payload;

       //Find the quiz by its ID in the main state by ssearching for it and update its highest core with the new total score
       //Find returns whether the id property of that quiz matches the provided quizId
       // When find finds a quiz object with an id matching quizId, it returns a reference to that object and stored in the variable quizToUpdate
       const quizToUpdate = state.quizData.find(quiz => quiz.id === quizId);

       //if the quiz is found, update its highest score
       if (quizToUpdate){
        quizToUpdate.highestScore = totalScore;
       }
      },

      //Reducer to load the quiz data from the local storage
      loadQuizData: (state, action) => {
        // Extract the quiz data from the action payload        
        console.log(`action.payload`, action.payload)

       // Update the quizData state with the loaded data
       state.quizData.push(action.payload)
      },
   },
});


// Extract actions from slice and export them
export const { 
    deleteQuiz, 
    deleteQuestion,  
    addQuestion, 
    editQuestion, 
    createQuiz, 
    saveQuiz,
    updateHighestScore,
    loadQuizData  } = mainSlice.actions;

// Export reducer
export default mainSlice.reducer;
