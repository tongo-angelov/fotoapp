import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostCard from "../components/PostCard/PostCard";
import { getAllUsers } from "../redux/users/usersSlice";
import { fetchPosts, getPostsStatus, getPostsError, getAllPosts } from "../redux/posts/postsSlice";
import { getUser } from "../redux/user/userSlice";

export default function PostsPage() {
    const dispatch = useDispatch();

    const user = useSelector(getUser);

    const posts = useSelector(getAllPosts);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    const users = useSelector(getAllUsers);

    useEffect(() => {
        if (postsStatus === 'idle')
            dispatch(fetchPosts());
    }, [postsStatus, dispatch]);

    let content;
    if (postsStatus === 'pending') {
        content = <p>Loading...</p>;
    } else if (postsStatus === 'fulfilled') {
        content = posts.map((post, key) =>
            <PostCard key={key}
                title={post.title}
                body={post.body}
                postId={post.id}
                user={users.find(user => user.id === post.userId)}
                owner={post.userId === user.id} />
        );
    } else if (postsStatus === 'rejected') {
        content = <p>{error}</p>;
    }

    return (
        <div className="list">
            {content}
        </div>
    );
}

