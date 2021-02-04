import React from "react";
import styled from "styled-components";

export default function () {
  return (
    <>
      <Footer>
        <Attribution>
          &copy; 2021 DIMBACRAZY <br /> powered by{" "}
          <a
            href="http://castynet.africa"
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
