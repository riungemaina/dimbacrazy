import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import file from "./md/posts.md";

export default function () {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <>
      <Post>
        <ReactMarkdown source={markdown} />
      </Post>
    </>
  );
}

const Post = styled.div`
    padding: 20px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 700px;
    margin: 0 auto;
    border-left: 1px solid #aaa;
    border-right: 1px solid #aaa;
    font-family: 'Titillium Web', sans-serif;
}

  img {
    padding: 20px 0;
    height: 300px;
    width: auto;
  }

  p{
    padding: 5px 0;
    text-align: justify;
    font-size: 1.05em;
  }

  h1, h2, h3, h4, h5, h6{
    padding: 0 0 20px 0;
    text-align: center;
  }
`;
