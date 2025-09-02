import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação das telas (páginas)
import { LewefyCom } from './pages/Home/LewefyCom';
import { LewefyComOProjeto } from './pages/OProjeto/LewefyComOProjeto';
import { LewefyComRecursos } from './pages/Recursos/LewefyComRecursos';
import { LewefyComAcolhimento } from './pages/Acolhimento/LewefyComAcolhimento';
import { LewefyComLogin } from './pages/Login/LewefyComLogin';
import { LewefyComCadastro } from './pages/Register/LewefyComCadastro';
import { LewefyComEsqueciSenha } from './pages/ForgotPassword/LewefyComEsqueciSenha';
import { LewefyComMeuPainel } from './pages/Dashboard/LewefyComMeuPainel';
import { LewefyComMeusDesabafos } from './pages/MeusDesabafos/LewefyComMeusDesabafos';
import { LewefyComDepoimento } from './pages/Depoimento/LewefyComDepoimento';

// Importação das páginas para Profissionais
import { LewefyComLoginProfissional } from './pages/LoginProfissional/LewefyComLoginProfissional';
import { LewefyComCadastroProfissional } from './pages/CadastroProfissional/LewefyComCadastroProfissional';
import { LewefyComEsqueciSenhaProfissional } from './pages/EsqueciSenhaProfissional/LewefyComEsqueciSenhaProfissional';
import { LewefyComNovaSenhaProfissional } from './pages/NovaSenhaProfissional/LewefyComNovaSenhaProfissional';
import { LewefyComMatchProfissional } from './pages/MatchProfissional/LewefyComMatchProfissional';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<LewefyCom />} />
        <Route path="/oprojeto" element={<LewefyComOProjeto />} />
        <Route path="/recursos" element={<LewefyComRecursos />} />
        <Route path="/recursos-paginadepoimento" element={<LewefyComDepoimento />} />
        <Route path="/acolhimento" element={<LewefyComAcolhimento />} />

        {/* Rotas de Autenticação de Usuário */}
        <Route path="/login" element={<LewefyComLogin />} />
        <Route path="/cadastro" element={<LewefyComCadastro />} />
        <Route path="/esqueci-senha" element={<LewefyComEsqueciSenha />} />
        
        {/* Rotas de Autenticação de Profissional */}
        <Route path="/login-profissional" element={<LewefyComLoginProfissional />} />
        <Route path="/cadastro-profissional" element={<LewefyComCadastroProfissional />} />
        <Route path="/esqueci-senha-profissional" element={<LewefyComEsqueciSenhaProfissional />} />
        <Route path="/nova-senha-profissional" element={<LewefyComNovaSenhaProfissional />} />
        
        {/* Rotas Privadas (futuramente protegidas) */}
        <Route path="/meupainel" element={<LewefyComMeuPainel />} />
        <Route path="/meus-desabafos" element={<LewefyComMeusDesabafos />} />
        <Route path="/match-profissional" element={<LewefyComMatchProfissional />} />

        {/* Adicione uma rota curinga para Not Found, se desejar */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
