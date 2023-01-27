import { configureStore } from "@reduxjs/toolkit";

import userSlice, { userMiddleware } from "./user/userSlice";
import usersSlice from "./users/usersSlice";
import postsSlice from "./posts/postsSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        users: usersSlice,
        posts: postsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userMiddleware)
});