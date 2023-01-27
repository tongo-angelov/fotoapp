import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { fetchUsers } from "./redux/users/usersSlice";

import RequireAuth from "./components/Auth/RequireAuth";
import NavBar from "./components/NavBar/NavBar";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import PostsPage from "./pages/PostsPage";
import AlbumsPage from "./pages/AlbumsPage";

store.dispatch(fetchUsers());

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/profile"
                        element={
                            <RequireAuth>
                                <ProfilePage />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/posts"
                        element={
                            <RequireAuth>
                                <PostsPage />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/albums"
                        element={
                            <RequireAuth>
                                <AlbumsPage />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </Router>
        </Provider>
    );
}