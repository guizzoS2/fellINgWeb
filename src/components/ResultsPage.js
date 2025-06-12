import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultsPage.css';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { termo, data } = location.state || {};

  if (!data) {
    return (
      <div className="results-wrap">
        <p>Nenhum resultado encontrado. Voltar para a página inicial.</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Início</button>
      </div>
    );
  }

  return (
    <section className="results-page section-dark">
      <div className="container">
        <h2 className="section-title">Resultado do termo "{termo}"</h2>

        <pre className="json-response">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>

        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Voltar</button>
      </div>
    </section>
  );
};

export default ResultsPage; 