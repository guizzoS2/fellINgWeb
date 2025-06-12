import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import EMOTION from './components/eMOTION';
import Insightful from './components/Insightful';
import EmotionVisualization from './components/EmotionVisualization';
import Databricks from './components/Databricks';
import DatabricksAnalysis from './components/DatabricksAnalysis';
import PowerBIDashboards from './components/PowerBIDashboards';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FellingCore from './components/FellingCore';
import PoweredByDatabricks from './components/PoweredByDatabricks';
import ResultsPage from './components/ResultsPage';

function App() {
  const Home = () => (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <EMOTION />
      <FellingCore />
      <Insightful />
      <EmotionVisualization />
      <Databricks />
      <DatabricksAnalysis />
      <PowerBIDashboards />
      <PoweredByDatabricks />
      <Team />
      <CTA />
      <Footer />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resultado" element={<ResultsPage />} />
    </Routes>
  );
}

export default App; 