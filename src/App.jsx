import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Evenements from './components/Evenements';
import Menu from './components/Menu';
import Prestations from './components/Prestations';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import AProposPage from './pages/AProposPage';
import ContactPage from './pages/ContactPage';
import PolitiqueConfidentialitePage from './pages/PolitiqueConfidentialitePage';
import MentionsLegalesPage from './pages/MentionsLegalesPage';
import PolitiqueCookiesPage from './pages/PolitiqueCookiesPage';
import './App.css';

const Galerie = lazy(() => import('./components/Galerie'));

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Evenements />
      <Menu />
      <Suspense fallback={null}>
        <Galerie />
      </Suspense>
      <Prestations />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/apropos" element={<AProposPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/politique-cookies" element={<PolitiqueCookiesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
