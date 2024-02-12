import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import flameImg from '../../images/flame.gif';

export default function PageMain() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/mainlogin');
    }, 3000);

    return () => clearTimeout(timer);
  });
  return (
    <StyledMainWrapper>
      <h1 className="title">CHATTING PROJECT</h1>
      <p>made by SMJ426 & stophyeon</p>
    </StyledMainWrapper>
  );
}

const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    font-size: 10vw;
    text-align: center;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 60px;
    }
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
