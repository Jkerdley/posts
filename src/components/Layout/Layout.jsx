import React from "react";
import { User } from "../User/User";
import { useState } from "react";
import { useEffect } from "react";
import { request } from "../../api";
import { Loader } from "../Loader/Loader";
import { PostList } from "../PostList/PostList";
import "./layout.css";
import { Modal } from "../Modal/Modal";
import { useCallback } from "react";

export const Layout = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [selectedPost, setSelectedPost] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log("selectedPost", selectedPost);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [fedchedPosts, fedchedUsers, fedchedComments] = await Promise.all([
                    request("https://jsonplaceholder.typicode.com/posts"),
                    request("https://jsonplaceholder.typicode.com/users"),
                    request("https://jsonplaceholder.typicode.com/comments"),
                ]);
                setPosts(fedchedPosts);
                setUsers(fedchedUsers);
                setComments(fedchedComments);
                console.log("Данные загружены", { fedchedPosts, fedchedUsers, fedchedComments });
            } catch (error) {
                console.error("Ошибка загрузки данных", error);
                setError(error.message || "Произошла ошибка сети или сервера");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const selectedUser = users.find((user) => user.id === selectedPost.userId);
    const selectedComments = comments.filter((comment) => comment.postId === selectedPost.id);

    const handleSelectPost = useCallback(() => setSelectedPost, []);
    const handleCloseModal = useCallback(() => setSelectedPost(""), []);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div className="main-layout">
            {selectedPost && (
                <Modal postAuthor={selectedUser} postComments={selectedComments} onClose={handleCloseModal} />
            )}
            <PostList users={users} posts={posts} onSelectPost={handleSelectPost} />
        </div>
    );
};
