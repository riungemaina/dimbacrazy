import React from "react";
import styled from "styled-components";
import { Icon } from "./helpers";

export default function () {
  return (
    <>
      <Footer>
        <IconsWrap>
          <Icon.Twitter size="25" />
          <Icon.Facebook size="25" />
        </IconsWrap>
        <Attribution>
          &copy; 2021 DIMBACRAZY <br /> powered by{" "}
          <a
            href="https://castynet.africa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Castynet Studios
          </a>
        </Attribution>
      </Footer>
    </>
  );
}

const IconsWrap = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 15px;
  padding-top: 20px;
`;

const Attribution = styled.p`
  font-weight: 800;
  padding: 10px;
  letter-spacing: 1px;
  font-size: 0.8em;
  text-align: center;
  width: 100%;
`;

const Footer = styled.footer`
  background-color: #ffeb3b;
  color: #000;
`;
