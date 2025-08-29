// File: lewefyfrontend/src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './pages/util/scrollToTop.jsx';
// importe aqui seus componentes de página, por exemplo:
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';

export default function App() {
  return (
    <BrowserRouter>
      {/* Sempre que a rota mudar, ScrollToTop zera a posição de scroll */}
      <ScrollToTop />

      {/* Defina aqui suas rotas */}
      <Routes>
        {/* Exemplo de rotas: */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
