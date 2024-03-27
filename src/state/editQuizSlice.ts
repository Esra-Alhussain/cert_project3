import { createSlice } from "@reduxjs/toolkit";

//define the state
interface editQuizState {
    value: number;
}

//create initial state to 0 
const initialState: editQuizState = {
    value: 0,
};

//create the slice
// const editQuizSlice = createSlice ({
//     name: "counter",
//     initialState,
//     reducers: {
//          increment: 
//     }
// });

// export default editQuizSlice.reducer;