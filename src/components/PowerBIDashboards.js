import React from 'react';
import './PowerBIDashboards.css';

// Image imports – Power BI dashboard screenshots
import barsImg from '../img/db/bars.png';
import growthImg from '../img/db/growth.png';
import pizzaImg from '../img/db/pizza.png';

const PowerBIDashboards = () => {
  const summary =
    'Os dashboards no Power BI complementam as análises executadas no Databricks ao importar os mesmos dados ' +
    'e apresentá-los em visualizações interativas. Dessa forma, conseguimos comparar empresas do mesmo nicho, ' +
    'acompanhar a evolução de métricas ao longo do tempo, entender a modelagem relacional dos dados e avaliar a ' +
    'distribuição de sentimentos — tudo em um único ambiente que facilita a tomada de decisões.';

  const dashboards = [
    {
      title: 'Comparação entre Empresas',
      description:
        'Gráfico de barras que avalia desempenho e engajamento de marcas concorrentes (Adidas, Nike e Puma).',
      img: barsImg,
    },
    {
      title: 'Tendência de Crescimento',
      description:
        'Análise de valores dos últimos meses para identificar padrões e auxiliar previsões futuras.',
      img: growthImg,
    },
    {
      title: 'Distribuição de Sentimentos',
      description:
        'Conexão direta ao Databricks para mostrar a proporção de sentimentos dos posts em gráfico de pizza interativo.',
      img: pizzaImg,
    },
  ];

  return (
    <section id="powerbi" className="powerbi-section section">
      <div className="container">
        <h2 className="section-title">Dashboards Interativos no Power BI</h2>
        <p className="section-summary">{summary}</p>

        <div className="dashboard-grid">
          {dashboards.map(({ title, description, img }) => (
            <div key={title} className="dashboard-card">
              <img src={img} alt={title} className="dashboard-image" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerBIDashboards; 