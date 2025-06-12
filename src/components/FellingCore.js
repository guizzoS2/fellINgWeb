import React, { useState } from 'react';
import './FellingCore.css';
import coreData from '../data/fellINgCORE.json';

const FellingCore = () => {
  const [copied, setCopied] = useState(false);

  const copyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(coreData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const libs = [
    { name: 'flask', description: 'Micro framework web em Python.' },
    { name: 'requests', description: 'Cliente HTTP para fazer requisições.' },
    { name: 'nltk', description: 'ToolKit de Linguagem Natural.' },
    { name: 'textblob', description: 'Processamento de texto simplificado.' },
    { name: 'vaderSentiment', description: 'Analisador de sentimento léxico.' },
    { name: 'numpy', description: 'Biblioteca de computação numérica.' },
  ];

  return (
    <section id="fellcore" className="fellcore-section">
      <div className="container">
        <h2 className="section-title">fellINgCORE</h2>
        <p className="section-subtitle">
          Coleta os dados do Reddit e realiza uma análise inicial de sentimento antes de enviá-los para a eMOTION.
        </p>

        <div className="fellcore-grid">
          <div className="json-terminal">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn-close"></span>
                <span className="btn-minimize"></span>
                <span className="btn-maximize"></span>
              </div>
              <span className="terminal-title">fellINgCORE.json</span>
              <button onClick={copyJson} className="copy-btn">
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
            <pre className="terminal-body">
              <code>{JSON.stringify(coreData, null, 2)}</code>
            </pre>
          </div>

          <div className="libs-card">
            <h3>Principais Bibliotecas</h3>
            <ul className="libs-list">
              {libs.map(lib => (
                <li key={lib.name}>
                  <strong>{lib.name}</strong>: {lib.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FellingCore; 