import React, { useContext, useState, useEffect } from "react";
import { Slugify } from "./helpers";

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
  const [news, setNews] = useState([]);
  const [epl, setEpl] = useState([]);
  const [kpl, setKpl] = useState([]);
  const [laliga, setLaliga] = useState([]);
  const [seriea, setSeriea] = useState([]);
  const [betting, setBetting] = useState([]);

  const Link = "https://dimbacrazy.castynet.africa";

  function findCategory(c, arr) {
    return arr.filter((item) => item.Category.indexOf(c) !== -1);
  }

  const postData = async () => {
    fetch(Link + "/api/collections/get/Articles", {
      headers: { Authorization: "Bearer abc61e9be614a9efd48cd2a4336868" },
    })
      .then((res) => res.json())
      .then((res) => {
        var rawPosts = res.entries;
        var slugified = rawPosts.map(function (el) {
          var o = Object.assign({}, el);
          o.slug = Slugify(o.Title);
          return o;
        });
        setPosts(slugified);
        setFeatured(slugified.slice(0, 1));
        setBodyPosts(slugified.slice(5, 17));
        setIntroPosts(slugified.slice(1, 5));
        setEpl(findCategory("EPL", slugified));
        setKpl(findCategory("KPL", slugified));
        setNews(findCategory("News", slugified));
        setLaliga(findCategory("Laliga", slugified));
        setSeriea(findCategory("Serie A", slugified));
        setBetting(findCategory("Betting", slugified));
      });
  };

  function Loaded() {
    if (
      (posts.length === 0,
      featured.length === 0,
      bodyPosts.length === 0,
      introPosts.length === 0)
    ) {
      return false;
    } else return true;
  }

  return (
    <DimbaContext.Provider
      value={{
        posts,
        bodyPosts,
        featured,
        introPosts,
        Loaded,
        Link,
        news,
        epl,
        kpl,
        laliga,
        seriea,
        betting,
      }}
    >
      {children}
    </DimbaContext.Provider>
  );
};
