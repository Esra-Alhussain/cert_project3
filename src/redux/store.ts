//configureStore to help setting up our store
import { configureStore } from '@reduxjs/toolkit';
import mainReducer  from '../state/MainStateSlice';   //import the mainstateslice

/**
 * Creating the store w/reducers
 */

//export the store by default
//connect the state slices using the store so they can globally be accissible accross the entire application
export const store = configureStore({
    reducer: {
        main: mainReducer,  //connect the mainSlice to the store to be accessible using the Provider in main
    } 
});
//connect the store and the entire Redux state to react 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;