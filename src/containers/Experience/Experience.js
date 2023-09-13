 
// Experience.js
import React from 'react';
import Card from '../../components/ExperienceCard/ExperienceCard';
import experienceData from './data';

const Experience = () => {


  return (
    <section id="experience" className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
      {experienceData.map((job, index) => (
        <Card key={index} {...job} />
      ))}
    </section>
  );
};

export default Experience;
