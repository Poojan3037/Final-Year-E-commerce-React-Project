import { createSlice } from "@reduxjs/toolkit";

// export const getUser = createAsyncThunk("/login", async (thunkApi) => {

// });

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser(state, action) {
      let newObj = {
        email: action.payload.email,
        uid: action.payload.uid,
        displayName: action.payload.displayName,
      };

      state.user = action.payload;
    },

    logOutUser(state, action) {
      state.user = "";
    },
  },
});

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//   },
//   extraReducers: {
//     setUser(state, action) {
//       let newObj = {
//         email: action.payload.email,
//         uid: action.payload.uid,
//         displayName: action.payload.displayName,
//       };

//       state.user = action.payload;
//     },

//     logOutUser(state, action) {
//       state.user = "";
//     },
//   },
// });

// [getMeals.pending]: ((state) => {
//   state.loading = true;
// }),
// [getMeals.fulfilled]: ((state, action) => {
//   state.mealList = action.payload;
//   state.loading = false;
// })
export default authSlice;

export const authSliceAction = authSlice.actions;
