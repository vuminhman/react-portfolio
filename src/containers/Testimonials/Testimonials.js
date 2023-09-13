import React from 'react';
import './Testimonials.scss';
import testimonials from './data';
import quoteIcon from '../../assets/images/quote.svg'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import ReusablePrimaryHeading from '../../components/reusables/ReusablePrimaryHeading'
import ReusableSecondaryHeading from '../../components/reusables/ReusableSecondaryHeading'
import ReactMarkdown from 'react-markdown';

const Testimonials = () => {
  return (<section id='testimonials' className='testimonials-wrapper'>
        <ReusablePrimaryHeading icon={faGraduationCap} title={"Awesome Testimonials"}/>
        
        <ReusableSecondaryHeading icon={faGraduationCap} title={"See What My Colleagues Have to Say About Me"}></ReusableSecondaryHeading>
        <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
            <img className="company-logo" src={testimonial.companyLogo} alt="Company Logo" />
            <ReactMarkdown className="testimonial-text">{testimonial.testimonial}</ReactMarkdown>
            <div className="footer">
                <div className="author-info">
                <img src={testimonial.profilePicture} alt={`${testimonial.name}'s profile`} />
                <div>
                    <h3>{testimonial.name}</h3>
                    <p className="position">{testimonial.position}</p>
                </div>
                </div>
                <img className="quote-icon" src={quoteIcon} alt="Quote Icon" />
            </div>
            </div>
        ))}
        </div>
    </section>
  );
};

export default Testimonials;
