import React from "react";
import "./comment.css";
export const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <h4 className="comment_name">{comment.name}</h4>
            <p className="comment_body">{comment.body}</p>
            <div className="comment_email">{comment.email}</div>
        </div>
    );
};
