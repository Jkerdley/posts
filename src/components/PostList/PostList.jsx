import React from "react";
import "./postList.css";
import { Post } from "../Post/Post";
import { memo } from "react";
export const PostList = memo(({ users, posts, onSelectPost }) => {
    console.log(posts);
    console.log("users", users);

    const getUser = (postAutorId) => users.find((user) => user.id === postAutorId);
    return (
        <div className="posts-list">
            {posts.map((post) => (
                <Post key={post.id} post={post} onSelectPost={onSelectPost()} getUser={getUser} />
            ))}
        </div>
    );
});
