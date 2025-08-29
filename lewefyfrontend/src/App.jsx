// File: src/App.jsx
import { Routes } from 'react-router-dom';
import ScrollToTop from './pages/util/scrollTopTop.jsx'; 
// importe suas páginas, por exemplo:
// import Home from './pages/homepage.jsx';
// import NotFound from './pages/notfoundpage.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Exemplo: */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}
