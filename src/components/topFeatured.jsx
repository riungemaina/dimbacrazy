import React from "react";
import styled from "styled-components";
import { useApi } from "./context";

export default function () {
  const api = useApi();
  const posts = api.introPosts;
  const featuredPost = api.featured[0];
  const apiLink = api.Link;
  const postSummary = featuredPost.Post.substring(0, 170);

  return (
    <>
      <Featured>
        <FeaturedPost>
          <img src={apiLink + "/" + featuredPost.CoverImage.path} />
          <Heading>{featuredPost.Title.substring(0, 60)}...</Heading>
          <p>{postSummary}...</p>
        </FeaturedPost>
        <Posts>
          {posts.map((post) => (
            <SinglePost key={post._id}>
              <Image>
                <img src={apiLink + "/" + post.CoverImage.path} />
              </Image>
              <HeadingSub>{post.Title.substring(0, 46)}</HeadingSub>
            </SinglePost>
          ))}
        </Posts>
      </Featured>
    </>
  );
}

const Image = styled.div`
  width: 100%;
  padding-top: 55%;
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

const SinglePost = styled.div`
  max-width: 200px;
  margin: 10px 15px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    ". ."
    ". .";
`;

const Featured = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  align-items: center;
  border-bottom: 1px solid #000;
`;

const FeaturedPost = styled.div`
  padding: 20px;
  max-width: 350px;
  text-align: justify;

  p {
    font-size: 0.8em;
  }
`;

const HeadingSub = styled.h4`
  font-weight: 900;
  font-size: 0.85em;
  padding: 10px 5px 5px;
`;

const Heading = styled.h2`
  text-transform: uppercase;
  font-size: 1em;
  padding: 15px 0 5px;
`;
