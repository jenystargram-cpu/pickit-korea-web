import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplineBackground from './components/SplineBackground';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Careers from './pages/Careers';
import Partners from './pages/Partners';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <SplineBackground />
      <Navbar />
      <main className="flex-grow relative z-10 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;