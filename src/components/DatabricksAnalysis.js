import React from 'react';
import './DatabricksAnalysis.css';

// Image imports – Databricks analysis screenshots
import tratamentoDadosImg from '../img/databricks/tratamentoDados.png';
import analiseExploratoriaImg from '../img/databricks/analiseExploratoria.png';
import analisePlavrasImg from '../img/databricks/analisePlavras.png';
import analiseScoreMedioImg from '../img/databricks/analiseScoreMedio.png';
import analiseQualiXQuantiImg from '../img/databricks/analiseQualiXQuanti.png';
import clusterExample1Img from '../img/databricks/clusterExample1.png';
import clusterExample2Img from '../img/databricks/clusterExample2.png';

const DatabricksAnalysis = () => {
  const analyses = [
    {
      title: 'Tratamento de Dados',
      description:
        'Remoção de nulos, normalização de textos (lowercase, remoção de links) e categorização de emoções e sentimentos.',
      img: tratamentoDadosImg,
    },
    {
      title: 'Análise Exploratória',
      description:
        'Distribuição de sentimentos (positivo, negativo, neutro), emoções mais comuns e palavras-chave mais frequentes.',
      img: analiseExploratoriaImg,
    },
    {
      title: 'Palavras Mais Frequentes',
      description:
        'Separação e frequência de termos em textos positivos, negativos e neutros.',
      img: analisePlavrasImg,
    },
    {
      title: 'Score Médio por Sentimento/Emoção',
      description:
        'Média de relevância e engajamento para cada sentimento ou emoção identificada.',
      img: analiseScoreMedioImg,
    },
    {
      title: 'Análise Qualitativa × Quantitativa',
      description:
        'Cruzamento, contagem e agrupamento entre sentimento × emoção para identificar padrões.',
      img: analiseQualiXQuantiImg,
    },
  ];

  return (
    <section id="databricks-analysis" className="databricks-analysis section-dark">
      <div className="container">
        <h2 className="section-title">Análises no Databricks</h2>
        <p className="section-subtitle">
          Como utilizamos o Databricks para processar, explorar e extrair insights do dataset de sentimentos da Netflix.
        </p>

        <div className="analysis-grid">
          {analyses.map(({ title, description, img }) => (
            <div className="analysis-card" key={title}>
              <img src={img} alt={title} className="analysis-image" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <div className="cluster-section">
          <h3 className="cluster-title">Clusters de Sentimentos</h3>
          <p className="cluster-subtitle">
            Agrupamentos visuais que mostram como os sentimentos se distribuem em diferentes clusters.
          </p>
          <div className="cluster-images">
            <img src={clusterExample1Img} alt="Cluster Example 1" />
            <img src={clusterExample2Img} alt="Cluster Example 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatabricksAnalysis; 