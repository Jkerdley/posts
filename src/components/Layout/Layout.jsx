import React from "react";
import { User } from "../User/User";
import { useState } from "react";
import { useEffect } from "react";
import { request } from "../../api";
import { Loader } from "../Loader/Loader";
import { PostList } from "../PostList/PostList";

export const Layout = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="">
            <User />
            <PostList users={users} posts={posts} comments={comments} />
        </div>
    );
};
