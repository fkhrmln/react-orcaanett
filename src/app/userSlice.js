import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    username: '',
    password: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state, action) => {
      state.user = {
        username: '',
        password: '',
      };
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
