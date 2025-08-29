// File: src/App.jsx
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './pages/util/scrollToTop.jsx';

// importe seus componentes de página
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Exemplo de rotas: */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
}
