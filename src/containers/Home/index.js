 
import React from 'react';
import './Home.scss'

const Home = () => {
  return (
    <section id='home'>
    <div className="container mx-auto">
      {/* Introduction */}
      <section id="home" className="intro-section container">
        <h1 className="intro-heading text-4xl font-bold mb-4">Hello, I'm Man Vu.</h1>
        <p className="intro-text text-lg">
          Software Developer based in Ottawa, Ontario, Canada. Specializing in web development and software
          engineering, I strive to create optimized and scalable applications.
        </p>
      </section>

      {/* Personal Overview */}
      <section id="about" className="my-5 container">
        <div className="card rounded bg-white p-4">
          <h2 className="card-title text-3xl font-bold mb-4">About</h2>
          <div className="card-text text-lg leading-relaxed">
            {/* Your about content here */}
            {/* ... */}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section id="core-competencies" className="container">
        <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>

        {/* Technical Skills & Expertise */}
        <div id="skills" className="skill-section mb-5">
          <h3 className="text-2xl font-bold mb-4">Skills</h3>
          <div className="space-x-2">
            {/* Your badges here */}
            {/* ... */}
          </div>
        </div>

        {/* Programming Proficiencies */}
        <div id="languages" className="skill-section mb-5">
          <h3 className="text-2xl font-bold mb-4">Programming Languages</h3>
          <div className="space-x-2">
            {/* Your badges here */}
            {/* ... */}
          </div>
        </div>

        {/* Technology Stack */}
        <div id="technologies" className="skill-section mb-5">
          <h3 className="text-2xl font-bold mb-4">Technologies</h3>

          {/* Databases */}
          <div className="tech-subsection mb-4">
            <h4 className="text-xl font-semibold mb-2">Databases:</h4>
            <div className="space-x-2">
              {/* Your badges here */}
              {/* ... */}
            </div>
          </div>

          {/* Web Development */}
          <div className="tech-subsection mb-4">
            <h4 className="text-xl font-semibold mb-2">Web Development:</h4>
            <div className="space-x-2">
              {/* Your badges here */}
              {/* ... */}
            </div>
          </div>

          {/* Frameworks and Platforms */}
          <div className="tech-subsection mb-4">
            <h4 className="text-xl font-semibold mb-2">Frameworks & Platforms:</h4>
            <div className="space-x-2">
              {/* Your badges here */}
              {/* ... */}
            </div>
          </div>

          {/* Version Control */}
          <div className="tech-subsection mb-4">
            <h4 className="text-xl font-semibold mb-2">Version Control:</h4>
            <div className="space-x-2">
              {/* Your badges here */}
              {/* ... */}
            </div>
          </div>
        </div>
      </section>
    </div>
    </section>
  );
};

export default Home;
