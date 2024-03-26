//configureStore to help setting up our store
import { configureStore } from '@reduxjs/toolkit';

/**
 * Creating the store w/reducers
 */

//export the store by default
//connect the state slices using the store so they can globally be accissible accross the entire application
export const store = configureStore({
    reducer: {

    } 
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;