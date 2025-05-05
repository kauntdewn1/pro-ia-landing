import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Authority } from './components/Authority';
import { Chapters } from './components/Chapters';
import { Bonus } from './components/Bonus';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Atualiza o título da aba
    document.title = "PRO.IA | Ganhe R$300 por dia com IA";
    
    // Define as variáveis CSS de tema
    document.documentElement.style.setProperty('--color-purple', '#b026ff');
    document.documentElement.style.setProperty('--color-magenta', '#ff00ff');
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">
      <Hero />
      <Authority />
      <Chapters />
      <Bonus />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
