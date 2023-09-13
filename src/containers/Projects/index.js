// Projects.js
import React, { useState } from 'react';
import ProjectCard from "../../components/Projects/ProjectCard";
import projectData from './data'
import './Projects.scss'
import ReusablePrimaryHeading from '../../components/reusables/ReusablePrimaryHeading'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';




const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Data Science', 'Web Development', 'Desktop Application'];
  const natures = ['Personal', 'Commercial'];

  let gridClass = 'grid-4-columns';

  if (projectData.length <= 4) {
    gridClass = 'grid-2-columns';
  } else if (projectData.length <= 9) {
    gridClass = 'grid-3-columns';
  }

  return (
    <section id="projects" className={`container projects-section ${gridClass}`}>
    <ReusablePrimaryHeading icon={faProjectDiagram} title={"Notable Projects"}/>
      <div className="category-bar">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      

      {(selectedCategory === 'All' ? categories.slice(1) : [selectedCategory]).map((category) => (
        <div key={category}>
          {selectedCategory === 'All' && <h2>{category}</h2>}
          {natures.map((nature) => (
            <div key={nature}>
              <h3>{nature} Projects</h3>
              {projectData
                .filter((project) => (selectedCategory === 'All' || project.type === selectedCategory) && project.nature === nature)
                .map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    subTitle={project.subTitle}
                    details={project.details}
                    backgroundImage={project.backgroundImage}
                  />
                ))}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Projects;