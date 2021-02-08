import React, { useContext, useState, useEffect } from "react";

const DimbaContext = React.createContext();

export function useApi() {
  return useContext(DimbaContext);
}

export const DimbaProvider = ({ children }) => {
  useEffect(() => {
    postData();
  }, []);

  const [posts, setPosts] = useState([]);
  const [bodyPosts, setBodyPosts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [introPosts, setIntroPosts] = useState([]);

  const postData = async () => {
    fetch("https://dimbacrazy.castynet.africa/api/collections/get/Articles", {
      headers: { Authorization: "Bearer abc61e9be614a9efd48cd2a4336868" },
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.entries);
        setBodyPosts(res.entries.slice(5));
        setFeatured(res.entries.slice(0, 1));
        setIntroPosts(res.entries.slice(1, 5));
      });
  };

  return (
    <DimbaContext.Provider value={{ posts, bodyPosts, featured, introPosts }}>
      {children}
    </DimbaContext.Provider>
  );
};
