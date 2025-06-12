import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  const navigate = useNavigate();

  const [termo, setTermo] = useState('');
  const [posts, setPosts] = useState(20);
  const [startDate, setStartDate] = useState('2025-05-12');
  const [endDate, setEndDate] = useState('2025-06-12');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!termo) return;
    setLoading(true);

    const body = {
      termo,
      posts: Number(posts),
      startDate,
      endDate,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      navigate('/resultado', { state: { termo, data } });
    } catch (error) {
      console.error('Erro ao acessar a API:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="cta section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Pronto para mergulhar no panorama emocional de conversas online?
          </h2>
          <p className="cta-description">
            Cadastre-se no feelINg hoje e comece a explorar o poder da análise de sentimentos orientada por IA.
          </p>
          
          <div className="cta-demo-form">
            <input
              type="text"
              placeholder="Termo (ex: adidas)"
              className="demo-input"
              value={termo}
              onChange={(e) => setTermo(e.target.value)}
            />
            <input
              type="number"
              placeholder="Quantidade de posts"
              className="demo-input"
              value={posts}
              onChange={(e) => setPosts(e.target.value)}
            />
            <input
              type="date"
              className="demo-input"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              className="demo-input"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleAnalyze} disabled={loading}>
              {loading ? 'Analisando...' : 'Analisar'}
            </button>
          </div>

          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">
              Começar Agora
            </button>
            {/* <button className="btn btn-secondary btn-large">
              Ver Documentação
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 