import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import flameImg from '../../images/flame.gif';

export default function PageLogin() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/chattingList'); // 우선은 진행을 위해서 로그인을 누르면 채팅 리스트로 옮기는 것만 구현
  };
  return (
    <StyledWrapper>
      <nav>
        <h1>CHATTING PROJECT</h1>
        <p>나만의 소중한 채팅을 사용해보세요.</p>
        <button type="button" onClick={handleClickLogin}>
          카카오톡으로 로그인
        </button>
      </nav>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 500px;
    height: 300px;
    background-color: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 15px;

    > h1 {
      font-size: 40px;
      background-image: url(${flameImg});
      background-size: cover;
      background-position: center;
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }
    > p {
      font-size: 16px;
    }
    > button {
      border: 1px solid #f2c94c;
      width: 440px;
      height: 60px;
      background-color: #ffffff;
      border-radius: 15px;

      font-size: 22px;
      font-weight: bold;
      color: #767676;
    }
    > button:hover {
      cursor: pointer;
    }
    > button:active {
      background-color: #f2c94c;
      color: #ffffff;
    }
  }
`;
