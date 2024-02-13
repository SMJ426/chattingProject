import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageMain from '../Main/PageMain';
import PageLogin from '../Login/PageLogin';
import PageChattingList from '../ChattingList/PageChattingList';
import PageOnChatting from '../OnChatting/PageOnChatting';

export default function AppRouter() {
  return (
    <Routes>
      {/* Splash 페이지 */}
      <Route path="/" element={<PageMain />} />

      {/* 로그인, 회원가입 페이지 */}
      <Route path="/mainlogin" element={<PageLogin />} />

      {/* 채팅 리스트 페이지 */}
      <Route path="/chattingList" element={<PageChattingList />} />

      {/* 채팅 방 */}
      <Route path="/onChatting/:kakaoID" element={<PageOnChatting />} />
    </Routes>
  );
}
