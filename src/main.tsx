import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import { Obrigado } from './components/Obrigado'; // ajuste o caminho se necessário

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/obrigado" element={<Obrigado />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
