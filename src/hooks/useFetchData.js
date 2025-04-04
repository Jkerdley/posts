import { useEffect } from "react";
import { request } from "../api";
import { useState } from "react";

export const useFetchData = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
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
            } catch (error) {
                console.error("Ошибка загрузки данных", error);
                const fetchError =
                    error.message === "Failed to fetch" &&
                    "Ошибка загрузки с сервера - попробуйте c VPN (или браузер Opera)";
                setError(fetchError || error.message || "Произошла ошибка сети или сервера");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return [posts, users, comments, isLoading, error];
};
