import React, { useState } from 'react';
import './ExperienceCard.scss'

const Card = ({ title, date, description, achievements, sections }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = index => {
    setExpandedSections({
      ...expandedSections,
      [index]: !expandedSections[index]
    });
  };

  return (
    <div className="card-container">
      <h3 className="card-title">{title}</h3>
      <h4 className="card-date">{date}</h4>
      <p className="card-description">{description}</p>
      <h5 className="card-subtitle">Key Projects and Achievements:</h5>
      <ul className="card-list">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      {sections.map((section, index) => (
        <div key={index} className="card-section">
          <button className="card-section-toggle" onClick={() => toggleSection(index)}>
            {section.title}
          </button>
          {expandedSections[index] && (
            <ul className="card-section-list">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
