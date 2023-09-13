import React, { useState, useEffect } from 'react';
import CertificationCard from '../../components/CertificationCard/CertificationCard';
import './Certifications.scss';
import certificationsData from './data';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import ReusablePrimaryHeading from '../../components/reusables/ReusablePrimaryHeading'

const CertificationsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(true);

  const categories = ["All", "Data Science", "Web Development", "English Language", "Others"];

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
  
    return () => clearTimeout(timer);
  }, [selectedCategory]);
  

  return (
    <section id="certifications" className="container projects-section">
      <ReusablePrimaryHeading icon={faCertificate} title={"Certifications"}/>
      <div className="category-bar">
        {categories.map((category, index) => (
          <button
            key={index}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setSelectedCategory(category);
                setIsVisible(true);
              }, 300);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      {certificationsData
        .filter(cert => selectedCategory === "All" || cert.category === selectedCategory)
        .map((cert, index) => (
          <CertificationCard key={index} certification={cert} className={isVisible ? 'visible' : 'hidden'} />
        ))
      }
    </section>
  );
};

export default CertificationsSection;
