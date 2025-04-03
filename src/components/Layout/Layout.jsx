import React from "react";
import { Loader } from "../Loader/Loader";
import { PostList } from "../PostList/PostList";
import { PostProvider } from "../../context/PostContext.jsx";
import { POSTS_PER_PAGE } from "../../constants";
import { Pagination } from "../Pagination/Pagination.jsx";
import { request } from "../../api";
import { useState, useEffect } from "react";
import "./layout.css";

export const Layout = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

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
                const fetchError =
                    error.message === "Failed to fetch" &&
                    "Ошибка загрузки с сервера - попробуйте другой браузер";
                setError(fetchError || error.message || "Произошла ошибка сети или сервера");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <h2 className="error-message">{error}</h2>;
    }

    return (
        <PostProvider>
            <>
                <div className="main-layout">
                    <PostList users={users} comments={comments} posts={currentPosts} />
                </div>
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    indexOfLastPost={indexOfLastPost}
                    posts={posts}
                />
            </>
        </PostProvider>
    );
};
