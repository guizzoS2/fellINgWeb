import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="overview" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              feel<span className="title-highlight">INg</span>
              <span className="title-subtitle">data that feels with you</span>
            </h1>
            
            <p className="hero-description">
              feelINg é uma plataforma inovadora que analiza emotivamente posts do Reddit e transforma 
              sentimentos da comunidade online em <strong>insights acionáveis</strong> com o poder da 
              inteligência artificial.
            </p>

            <div className="hero-features">
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <span>Análise de Sentimentos</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤖</div>
                <span>IA Especializada</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <span>Insights Acionáveis</span>
              </div>
            </div>

            <div className="hero-actions">
              <button onClick={scrollToDemo} className="btn btn-primary btn-large">
                Veja em ação
              </button>
              <button className="btn btn-secondary btn-large">
                Saiba mais
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Posts Analisados</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Disponibilidade</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-container">
              <div className="chart-mockup">
                <div className="chart-header">
                  <h3>Análise Emocional em Tempo Real</h3>
                  <span className="chart-topic">r/netflix</span>
                </div>
                <div className="chart-content">
                  <div className="emotion-bar positive" style={{width: '65%'}}>
                    <span className="emotion-label">Positivo</span>
                    <span className="emotion-value">65%</span>
                  </div>
                  <div className="emotion-bar neutral" style={{width: '25%'}}>
                    <span className="emotion-label">Neutro</span>
                    <span className="emotion-value">25%</span>
                  </div>
                  <div className="emotion-bar negative" style={{width: '10%'}}>
                    <span className="emotion-label">Negativo</span>
                    <span className="emotion-value">10%</span>
                  </div>
                </div>
                <div className="chart-insights">
                  <div className="insight-item">
                    💡 Usuários estão respondendo positivamente ao novo conteúdo
                  </div>
                  <div className="insight-item">
                    📈 Engajamento 23% maior que a média
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 