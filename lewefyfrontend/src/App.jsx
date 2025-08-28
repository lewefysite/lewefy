import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './util/scrolltotop.jsx';
import HomePage from './pages/homepage.jsx';
import NotFoundPage from './pages/notfoundpage.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

