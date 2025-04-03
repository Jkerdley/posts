import React from "react";
import "../PostList/postList.css";
export const PostContent = ({ post }) => {
    console.log("post", post);

    return (
        <>
            <div className="posts-list_post-card_post-title">{post.title}</div>
            <div className="posts-list_post-card_post-text">{post.body}</div>
        </>
    );
};
