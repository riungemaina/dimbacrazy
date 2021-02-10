import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useApi } from "./context";
import Loading from "./loader";

export default function (data) {
  const api = useApi();
  const [post, setPost] = useState();

  const slug = data.match.params.slug;
  const singlePost = api.posts.find((obj) => obj.slug === slug);

  useEffect(() => {
    setPost(singlePost);
  }, [singlePost]);

  function ProductInfo() {
    if (post === undefined) {
      return <Loading />;
    } else {
      return <LoadedPost />;
    }
  }

  function LoadedPost() {
    return (
      <>
        <h1>{singlePost.Title}</h1>
        <ReactMarkdown source={post.Post} />
      </>
    );
  }

  return (
    <>
      <PostWrapper>
        <ProductInfo />
      </PostWrapper>
    </>
  );
}

const PostWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  border-left: 1px solid #aaa;
  border-right: 1px solid #aaa;
  font-family: "Titillium Web", sans-serif;

  img {
    padding: 20px 0;
    height: 300px;
    width: auto;
  }

  p {
    padding: 5px 0;
    text-align: justify;
    font-size: 1.1em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0 0 20px 0;
    text-align: center;
  }
`;
