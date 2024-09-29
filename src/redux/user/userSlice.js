import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,  // Added loading to initial state
    error: null,     // Changed error from false to null for consistency
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

// Export action creators correctly from `userSlice.actions`
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
