import React from 'react';
import './ProjectCard.scss'

const ProjectCard = ({ title, subTitle, details, backgroundImage }) => {
  return (
    <div className="project-card">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>
            <strong className="detail-label">{detail.label}:</strong>
            <span className="detail-value">{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
