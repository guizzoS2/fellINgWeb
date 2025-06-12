import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-text">feel<span className="logo-highlight">INg</span></span>
              <span className="logo-tagline">data that feels with you</span>
            </div>
            <p className="footer-description">
              Projeto acadêmico desenvolvido por estudantes de Big Data da Estácio, 
              transformando conversas do Reddit em insights valiosos.
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Projeto</h4>
              <a href="#overview">Visão Geral</a>
              <a href="#features">Funcionalidades</a>
              <a href="#evolution">Evolução</a>
            </div>
            
            <div className="link-group">
              <h4>Equipe</h4>
              <a href="#team">Conheça a Equipe</a>
              <a href="#contact">Contato</a>
            </div>
            
            <div className="link-group">
              <h4>Tecnologias</h4>
              <span>Python</span>
              <span>React</span>
              <span>Databricks</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 feelINg. Projeto acadêmico - Estácio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 