import React from "react";
import "../PostsList/postsList.css";
export const PostContent = ({ isOpened, post }) => {
    return (
        <>
            <div className={`posts-list_post-card_post-title `}>{post.title}</div>
            <div className={`posts-list_post-card_post-text ${isOpened ? "open" : ""}`}>{post.body}</div>
        </>
    );
};
