import React, { useState } from 'react';
import './eMOTION.css';
import eMotionData from '../../public/img/json/eMOTION.json';

const EMOTION = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToJsonClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(eMotionData, null, 2));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  const libs = [
    { name: 'fastapi', description: 'Framework web para construir APIs com Python.' },
    { name: 'uvicorn', description: 'Servidor ASGI para rodar aplicações como FastAPI.' },
    { name: 'pydantic', description: 'Validação de dados e gerenciamento de configurações.' },
    { name: 'python-jose', description: 'Implementação de JWT, JWS, JWE em Python.' },
    { name: 'textblob', description: 'API simples para processamento de texto.' },
    { name: 'aiohttp', description: 'Cliente/servidor HTTP assíncrono.' },
    { name: 'numpy', description: 'Biblioteca para computação numérica em Python.' },
  ];

  return (
    <section id="emotion" className="emotion-section section-dark">
      <div className="container">
        <h2 className="section-title">eMOTION API</h2>
        <p className="section-subtitle">
          A API eMOTION recebe os dados brutos e, com IA, realiza uma análise detalhada, 
          retornando emoções, tópicos e recomendações.
        </p>

        <div className="api-layout">
          <div className="api-demo-col">
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn-close"></span>
                  <span className="btn-minimize"></span>
                  <span className="btn-maximize"></span>
                </div>
                <span className="terminal-title">eMOTION - Resposta da API</span>
                <button onClick={copyToJsonClipboard} className="copy-btn">
                  {isCopied ? 'Copiado!' : 'Copiar'}
                </button>
              </div>
              
              <div className="terminal-body">
                <pre>
                  <code>{JSON.stringify(eMotionData, null, 2)}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="api-libs-col">
            <div className="libs-card">
              <h3>Tecnologias Utilizadas</h3>
              <p>As bibliotecas que impulsionam a eMOTION API.</p>
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
      </div>
    </section>
  );
};

export default EMOTION; 