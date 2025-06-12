import React, { useState } from 'react';
import './eMOTION.css';
import eMotionData from '../data/eMOTION.json';

const EMOTION = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToJsonClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(eMotionData, null, 2));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const libs = [
    { name: 'fastapi', description: 'Framework web para construção de APIs.' },
    { name: 'uvicorn', description: 'Servidor ASGI leve e rápido.' },
    { name: 'pydantic', description: 'Validação de dados baseada em tipos.' },
    { name: 'python-jose', description: 'Implementação de JWT.' },
    { name: 'textblob', description: 'Processamento de linguagem natural simples.' },
    { name: 'aiohttp', description: 'Cliente/servidor HTTP assíncrono.' },
    { name: 'numpy', description: 'Computação numérica de alto desempenho.' },
  ];

  return (
    <section id="emotion" className="emotion-section section-dark">
      <div className="container">
        <h2 className="section-title">eMOTION API</h2>
        <p className="section-subtitle">
          Processamento avançado de sentimentos e recomendações usando IA.
        </p>

        <div className="emotion-grid">
          {/* Terminal JSON */}
          <div className="json-terminal">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn-close"></span>
                <span className="btn-minimize"></span>
                <span className="btn-maximize"></span>
              </div>
              <span className="terminal-title">eMOTION.json</span>
              <button onClick={copyToJsonClipboard} className="copy-btn">
                {isCopied ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
            <pre className="terminal-body">
              <code>{JSON.stringify(eMotionData, null, 2)}</code>
            </pre>
          </div>

          {/* Libs List */}
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

export default EMOTION; 