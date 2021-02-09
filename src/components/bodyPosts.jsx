import React from "react";
import styled from "styled-components";
import { useApi } from "./context";

export default function () {
  const api = useApi();
  const posts = api.bodyPosts;
  const apiLink = api.Link;

  return (
    <>
      <Wrapper>
        {posts.map((post) => (
          <Post>
            <Image>
              <img src={apiLink + "/" + post.CoverImage.path} />
            </Image>
            <Title>{post.Title.substring(0, 45)}...</Title>
          </Post>
        ))}
        <FillerDiv></FillerDiv>
        <FillerDiv></FillerDiv>
        <FillerDiv></FillerDiv>
        <FillerDiv></FillerDiv>
      </Wrapper>
    </>
  );
}

const FillerDiv = styled.div`
  height: 0;
  width: 200px;
`;

const Title = styled.h3`
  font-size: 0.9em;
  padding-top: 10px;
`;

const Post = styled.div`
  width: 200px;
`;

const Image = styled.div`
  width: 100%;
  padding-top: 60%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: auto;
    margin: auto;
    position: absolute;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
`;
