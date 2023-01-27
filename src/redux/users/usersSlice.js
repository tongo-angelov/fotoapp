import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchAPI } from "../apiClient";

const initialState = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const _users = await FetchAPI.getUsers();
    return _users;
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const getAllUsers = (state) => state.users;

export default usersSlice.reducer;