import React, { createContext, useState, useContext } from "react";

const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
    const [selectedPost, setSelectedPost] = useState("");

    return <PostContext.Provider value={{ selectedPost, setSelectedPost }}>{children}</PostContext.Provider>;
};
