import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import SkillsPage from './pages/SkillsPage';
import ECommerceProject from './pages/projects/ECommerceProject';
import ECommerceAppProject from './pages/projects/ECommerceAppProject';
import ExchangeSystemProject from './pages/projects/ExchangeSystemProject';
import ERPSystemProject from './pages/projects/ERPSystemProject';
import MatchSphereProject from './pages/projects/MatchSphereProject';
import GelirGiderProject from './pages/projects/GelirGiderProject';
import TakasKosesiProject from './pages/projects/TakasKosesiProject';
import PortfolioProject from './pages/projects/PortfolioProject';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <div className="w-full min-h-screen">
            <MainLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                
                {/* Individual Project Routes */}
                <Route path="/projects/ecommerce" element={<ECommerceProject />} />
                <Route path="/projects/ecommerce-app" element={<ECommerceAppProject />} />
                <Route path="/projects/exchange-system" element={<ExchangeSystemProject />} />
                <Route path="/projects/erp-system" element={<ERPSystemProject />} />
                <Route path="/projects/matchsphere" element={<MatchSphereProject />} />
                <Route path="/projects/gelirgider" element={<GelirGiderProject />} />
                <Route path="/projects/takaskosesi" element={<TakasKosesiProject />} />
                <Route path="/projects/portfolio" element={<PortfolioProject />} />
              </Routes>
            </MainLayout>
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
