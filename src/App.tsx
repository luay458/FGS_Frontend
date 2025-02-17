// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurResponsibility from './pages/OurResponsibility';
import QualityAssurance from './pages/QualityAssurance';
import Services from './pages/Services';
// CSS
import "./styles/fonts.css";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-responsibility" element={<OurResponsibility />} />
          <Route path="/quality-assurance" element={<QualityAssurance />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
