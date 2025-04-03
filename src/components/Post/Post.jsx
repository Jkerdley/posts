import React from "react";
import { User } from "../User/User";
import { memo } from "react";

export const Post = memo(({ post, onSelectPost, getUser }) => {
    return (
        <article className="posts-list_post-card" onClick={() => onSelectPost(post)}>
            <User user={getUser(post.userId)} />
            <div className="posts-list_post-card_post-title">{post.userId}</div>
            <div className="posts-list_post-card_post-title">{post.title}</div>
            <div className="posts-list_post-card_post-text">{post.body}</div>
        </article>
    );
});
