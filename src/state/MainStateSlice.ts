
import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  settings: {}, // global settings
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
    ],
};

// Create main slice
const mainSlice = createSlice({
  name: "main",   //slice  name
  initialState,    //the state that is going to be the state that the slice will start with
  reducers: {
    // Reducer to delete a quiz by its ID
    deleteQuiz(state, action) {
        // The action payload contains the ID of the quiz to delete
        const quizIdToDelete = action.payload; // Extract the quiz ID from the action payload
        // Use the filter method to remove the quiz with the specified ID from the state
        state.quizData = state.quizData.filter(quiz => quiz.id !== quizIdToDelete);
      },

    deleteQuestion(state,action){

    },

    addQuestionToQuiz(state,action){

    },
    editQuiz(state, action) {
        state.quizData = action.payload;
      },

    createQuiz(state, action) {
        state.quizData.push(action.payload);   //how the state will be updated
      },

    saveQuiz(state, action) {
        state.quizData.push(action.payload);   //how the state will be updated
      },

     //Reducer to Update the highest score of a quiz 
    updateHighestScore(state, action) {
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
   
    // updateQuiz(state, action) {
    //     const updatedQuiz = action.payload;
    //     state.quizData = state.quizData.map(quiz => {
    //       if (quiz.id === updatedQuiz.id) {
    //         return updatedQuiz;
    //       }
    //       return quiz;
    //     });
    //   }
        
      
      
    // Add other reducers as needed
  }
});

// Extract actions from slice and export them
export const { deleteQuiz, deleteQuestion,  addQuestionToQuiz, editQuiz, createQuiz, saveQuiz,updateHighestScore  } = mainSlice.actions;

// Export reducer
export default mainSlice.reducer;
