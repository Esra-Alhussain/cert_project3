import { createSlice } from '@reduxjs/toolkit'

const initialState =
[
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
    ]

    const questionSlice = createSlice({
        name: 'test',
        initialState,
        reducers: {
          createQuestion(state, action) {
            console.log('received action: ', action)
            console.log('updating state to ...', action.payload)
            return action.payload
          },
          updateVotes(state, action){
            console.log(action);
                return state;
          }
        }
      })

      export const { createQuestion, updateVotes} = questionSlice.actions;

      createQuestion()