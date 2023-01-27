import { createSlice } from "@reduxjs/toolkit";

const localUser = JSON.parse(localStorage.getItem('user'));

const initialState = localUser || null;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            return action.payload;
        },
        saveLogin: (state, action) => {
            return action.payload;
        },
        logout: (state) => {
            return null;
        }
    }
});

export const getUser = (state) => state.user;

export const userMiddleware = (store) => (next) => (action) => {
    if (userSlice.actions.saveLogin.match(action)) {
        localStorage.setItem('user', JSON.stringify(action.payload));
    } else if (userSlice.actions.logout.match(action)) {
        localStorage.setItem('user', JSON.stringify(null));
    }
    return next(action);
};

export const { login, saveLogin, logout } = userSlice.actions;

export default userSlice.reducer;