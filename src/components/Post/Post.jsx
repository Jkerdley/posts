import React from "react";
import { User } from "../User/User";
import { memo } from "react";
import { PostContent } from "./PostContent";
import "../PostList/postList.css";
import { Comment } from "../Comment/Comment";
import { usePostContext } from "../../context/PostContext";

export const Post = memo(({ post, getUser }) => {
    const { selectedPost, setSelectedPost } = usePostContext();
    const isOpened = selectedPost && selectedPost.id === post.id;

    const togglePostOpen = () => {
        setSelectedPost(isOpened ? null : post);
    };

    return (
        <article className={`posts-list_post-card ${isOpened ? "open" : ""}`} onClick={togglePostOpen}>
            <User user={getUser(post.userId)} />
            <PostContent isOpened={isOpened} post={post} />
            {isOpened && (
                <div className="comments">
                    <h3>Комментарии:</h3>
                    {post.comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </div>
            )}
        </article>
    );
});
