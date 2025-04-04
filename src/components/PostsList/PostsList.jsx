import React from "react";
import "./postsList.css";
import { Post } from "../Post/Post";
import { memo } from "react";
export const PostsList = memo(({ users, comments, posts }) => {
    const getUser = (postAutorId) => users.find((user) => user.id === postAutorId);
    return (
        <div className="posts-list">
            {posts.map((post) => (
                <Post key={post.id} post={post} comments={comments} getUser={getUser} />
            ))}
        </div>
    );
});
