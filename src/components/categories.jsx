//         news,
//         epl,
//         kpl,
//         laliga,
//         seriea,
//         betting,
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useApi } from "./context";
import Loading from "./loader";
import { Redirect, Link } from "react-router-dom";

export default function (data) {
  const [cat, setCat] = useState();
  const category = data.match.params.c;
  const api = useApi();
  const apiLink = api.Link;

  useEffect(() => {
    if (category === "news") {
      setCat(api.news);
    } else if (category === "epl") {
      setCat(api.epl);
    } else if (category === "kpl") {
      setCat(api.kpl);
    } else if (category === "laliga") {
      setCat(api.laliga);
    } else if (category === "seriea") {
      setCat(api.seriea);
    } else if (category === "betting") {
      setCat(api.betting);
    } else setCat("Not Found");
  }, [category, setCat]);

  function ProductInfo() {
    if (cat === undefined) {
      return <Loading />;
    } else if (cat === "Not Found") {
      return <Redirect to="/not-found" />;
    } else {
      return <LoadedCat />;
    }
  }

  function LoadedCat() {
    return (
      <>
        {cat.map((post) => (
          <StyledLink key={post._id} to={`/post/${post.slug}`}>
            <Post>
              <Image>
                <img src={apiLink + "/" + post.CoverImage.path} />
              </Image>
              <Title>{post.Title.substring(0, 45)}...</Title>
            </Post>
          </StyledLink>
        ))}
        <FillerDiv></FillerDiv>
        <FillerDiv></FillerDiv>
        <FillerDiv></FillerDiv>
        <FillerDiv></FillerDiv>
      </>
    );
  }

  return (
    <>
      <Wrapper>
        <ProductInfo />
      </Wrapper>
    </>
  );
}

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: inherit;
    text-decoration: inherit;
  }
`;

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
