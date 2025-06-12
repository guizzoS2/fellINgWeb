import React from 'react';
import './Databricks.css';

const Databricks = () => {
  return (
    <section id="evolution" className="databricks section section-dark">
      <div className="container">
        <h2 className="section-title">Nossa Evolução</h2>
        <p className="section-subtitle">
          Mostrando nosso progresso do feelINg 1.0 até a integração completa com Databricks
        </p>
        
        <div className="evolution-timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>feelINg 1.0</h3>
              <p>Coleta simples de dados</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>API Integration</h3>
              <p>Análise inteligente com IA</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot active"></div>
            <div className="timeline-content">
              <h3>Databricks</h3>
              <p>Sistema completo com interface</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Databricks; 