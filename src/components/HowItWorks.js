import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Coleta de Dados',
      description: 'Nossa API busca posts relevantes do Reddit baseados em palavras-chave ou comunidades específicas.',
      icon: '🔍',
      color: 'blue'
    },
    {
      number: '02',
      title: 'Análise Emocional',
      description: 'Utilizamos IA avançada para analisar o sentimento de cada post e comentário, identificando emoções complexas.',
      icon: '🧠',
      color: 'purple'
    },
    {
      number: '03',
      title: 'Geração de Insights',
      description: 'Transformamos os dados emocionais em insights acionáveis com sugestões práticas para sua estratégia.',
      icon: '💡',
      color: 'orange'
    },
    {
      number: '04',
      title: 'Armazenamento Inteligente',
      description: 'Todos os dados são armazenados no Databricks para análises históricas e tendências temporais.',
      icon: '📊',
      color: 'green'
    }
  ];

  return (
    <section className="how-it-works section">
      <div className="container">
        <h2 className="section-title">Como o feelINg Funciona</h2>
        <p className="section-subtitle">
          Uma pipeline inteligente que transforma conversas do Reddit em insights valiosos
        </p>

        <div className="process-flow">
          {steps.map((step, index) => (
            <div key={step.number} className="process-step">
              <div className={`step-icon ${step.color}`}>
                <span className="step-emoji">{step.icon}</span>
                <span className="step-number">{step.number}</span>
              </div>
              
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="demo-preview">
          <div className="demo-header">
            <h3>Exemplo de Busca: "Netflix"</h3>
            <div className="demo-status">
              <span className="status-dot active"></span>
              Analisando em tempo real
            </div>
          </div>
          
          <div className="demo-content">
            <div className="search-input">
              <input type="text" value="Netflix" readOnly />
              <button className="search-btn">Analisar</button>
            </div>
            
            <div className="results-preview">
              <div className="result-item">
                <div className="post-meta">
                  <span className="subreddit">r/netflix</span>
                  <span className="timestamp">2 horas atrás</span>
                </div>
                <p className="post-content">
                  "A nova temporada está incrível! Melhor que esperava..."
                </p>
                <div className="sentiment-badge positive">
                  😊 Positivo (85%)
                </div>
              </div>
              
              <div className="result-item">
                <div className="post-meta">
                  <span className="subreddit">r/television</span>
                  <span className="timestamp">5 horas atrás</span>
                </div>
                <p className="post-content">
                  "Cancelamento foi uma decisão estranha..."
                </p>
                <div className="sentiment-badge negative">
                  😔 Negativo (70%)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 