import React from "react";
import "./User.css";
export const User = ({ user }) => {
    return (
        <section className="name-container">
            <div className="name-container_name-element">
                <div className="name-container_name-element_title">Автор: {user.name}</div>
                <div className="name-container_name-element_title">Контакты: {user.email}</div>
            </div>
        </section>
    );
};
