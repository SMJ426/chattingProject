import React from 'react';
import styled from 'styled-components';
import flameImg from '../../images/flame.gif';

export default function PageMain() {
  return (
    <StyledMainWrapper>
      <h1 className="title">CHATTING PROJECT</h1>
      <p>made by SMJ426 & stophyeon</p>
    </StyledMainWrapper>
  );
}

const StyledMainWrapper = styled.div`
  h1 {
    margin: 0;
    font-size: 10rem;
    text-align: center;
  }

  .title {
    background-image: url(${flameImg});
    background-size: cover;
    background-position: center;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
`;
