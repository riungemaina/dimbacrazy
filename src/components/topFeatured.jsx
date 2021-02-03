import React from "react";
import styled from "styled-components";

export default function () {
  return (
    <>
      <Featured>
        <FeaturedPost>
          <img src="./data/southampton.jpeg" />
          <Heading>Southampton lose 9-0 to a flying Manchester United</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ...
          </p>
        </FeaturedPost>
        <Posts>
          <SinglePost>
            <Image>
              <img src="./data/mancity.jpg" />
            </Image>
            <HeadingSub>Messi to sign for Mancity in May</HeadingSub>
          </SinglePost>
          <SinglePost>
            <Image>
              <img src="./data/transfers.jpg" />
            </Image>
            <HeadingSub>The Jan Transfer Window Closes</HeadingSub>
          </SinglePost>
          <SinglePost>
            <Image>
              <img src="./data/betting.jpg" />
            </Image>
            <HeadingSub>This is How to bet Responsibly</HeadingSub>
          </SinglePost>
          <SinglePost>
            <Image>
              <img src="./data/transfers.jpg" />
            </Image>
            <HeadingSub>The biggest Transfers this January</HeadingSub>
          </SinglePost>
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
