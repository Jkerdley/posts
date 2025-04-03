import React from "react";
import "./comment.css";

export const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <h4 className="comment_name">
                ({comment.email}): {comment.name}
            </h4>
            <p className="comment_body">{comment.body}</p>
        </div>
    );
};
