import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { name: 'Eduaro Horn', role: 'Gerente de Projeto', university: 'Estácio' },
    { name: 'Eloisa Piazza ', role: 'Gerente de Dados', university: 'Estácio' },
    { name: 'João Pedro Lopes', role: 'Desenvolvedor', university: 'Estácio' },
    { name: 'Lucas Mariano', role: 'Data Analyst // Dev-ops', university: 'Estácio' },
    { name: 'Luccas Catany', role: 'Data Analyst // Dev-ops', university: 'Estácio' },
    { name: 'Guilherme Vieira', role: 'Desenvolvedor', university: 'Estácio' }
  ];

  return (
    <section id="team" className="team section">
      <div className="container">
        <h2 className="section-title">Conheça a Equipe</h2>
        <p className="section-subtitle">
          6 estudantes de Big Data da Estácio unidos pela paixão em transformar dados em insights
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-avatar">
                <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-university">{member.university}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 