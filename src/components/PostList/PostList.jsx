import React from "react";
import "./postList.css";
import { Post } from "../Post/Post";
import { memo } from "react";
export const PostList = memo(({ users, comments, posts }) => {
    const getUser = (postAutorId) => users.find((user) => user.id === postAutorId);
    return (
        <div className="posts-list">
            {posts.map((post) => (
                <Post
                    key={post.id}
                    post={{ ...post, comments: comments.filter((comment) => comment.postId === post.id) }}
                    getUser={getUser}
                />
            ))}
        </div>
    );
});
