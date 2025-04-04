import React from "react";
import { Loader } from "../Loader/Loader";
import { PostsList } from "../PostsList/PostsList.jsx";
import { POSTS_PER_PAGE } from "../../constants";
import { Pagination } from "../Pagination/Pagination.jsx";
import { useState } from "react";
import "./layout.css";
import { useFetchData } from "../../hooks/useFetchData.js";

export const Layout = () => {
    const [posts, users, comments, isLoading, error] = useFetchData();
    const [currentPage, setCurrentPage] = useState(1);

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
        <div className="main-layout">
            <PostsList users={users} comments={comments} posts={currentPosts} />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                indexOfLastPost={indexOfLastPost}
                posts={posts}
            />
        </div>
    );
};
