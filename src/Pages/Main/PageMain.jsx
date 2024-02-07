import React from 'react';
import styled from 'styled-components';

const StyledMainWrapper = styled.div`
  background-color: skyblue;
`;

export default function PageMain() {
  return (
    <StyledMainWrapper>
      <h2>메인 페이지입니다.</h2>
    </StyledMainWrapper>
  );
}
