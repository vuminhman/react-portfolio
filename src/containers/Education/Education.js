import React from 'react';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import ReusablePrimaryHeading from '../../components/reusables/ReusablePrimaryHeading'
import EducationCard from '../../components/EducationCard/EducationCard';
import './Education.scss';
import educations from './data';


const Education = () => {
  return (
    <section className="education-section">
    <ReusablePrimaryHeading icon={faGraduationCap} title={"Education Timeline"}/>
      <ul className="education-timeline">
        {educations.map((education, index) => (
          <EducationCard 
            key={index}
            align={education.align}
            title={education.title}
            subtitle={education.subtitle}
            time={education.time}
            highlights={education.highlights}
            transcriptLink={education.transcriptLink}
            details={education.details}
            startTime={education.startTime}
            endTime={education.endTime}
          />
        ))}
      </ul>
    </section>
  );
};

export default Education;
