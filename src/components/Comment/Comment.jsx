import React from "react";
import "./comment.css";

export const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <h5 className="comment_title">
                ({comment.email}): {comment.name}
            </h5>
            <p className="comment_body">{comment.body}</p>
        </div>
    );
};
