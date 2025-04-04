import React from "react";
import { User } from "../User/User";
import { memo } from "react";
import { PostContent } from "./PostContent";
import "../PostsList/postsList.css";
import { Comment } from "../Comment/Comment";
import { useState } from "react";

export const Post = memo(({ post, comments, getUser }) => {
    const [selectedPost, setSelectedPost] = useState("");
    const isOpened = selectedPost && selectedPost.id === post.id;

    const togglePostOpen = () => {
        setSelectedPost(isOpened ? null : post);
    };
    const postComments = comments.filter((comment) => comment.postId === post.id);

    return (
        <article className={`posts-list_post-card ${isOpened ? "open" : ""}`} onClick={togglePostOpen}>
            <User user={getUser(post.userId)} />
            <PostContent isOpened={isOpened} post={post} />
            {isOpened && (
                <div className="comments">
                    <h4>{postComments.length > 0 ? "Комментарии:" : "Комментариев нет:"}</h4>
                    {postComments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </div>
            )}
        </article>
    );
});
