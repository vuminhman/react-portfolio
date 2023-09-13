import React from 'react';
import './EducationCard.scss';

const EducationCard = ({ align = 'left', title, subtitle, startTime, endTime, time, highlights, transcriptLink, details }) => {
  const openTranscript = () => {
    window.open(transcriptLink, '_blank', 'noopener,noreferrer');
  };


  return (
    <li className={`timeline-item ${align}`}>
      <div className='dates'>
        <span className="time-wrapper start-time">{startTime}</span>
        <span className="time-wrapper end-time">{endTime}</span>
      </div>
      <div className='activity-timeline'>
        <div className="connect-circles-top last-activity"></div>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="timeline-icon-point">
            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"></path>
        </svg>
        <div className="connect-circles-bottom"></div>
      </div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <div className="highlights">
          <span className="highlight-text">{highlights}</span>
          <button onClick={openTranscript} className="transcript-button">Show Transcripts</button>
        </div>
        <ul className="details">
          {details.map((detail, index) => (
            <li key={index}>
              <span className="icon">→</span> {/* You can replace this with your choice of icon */}
              <span className="title">{detail.title}:</span> {/* detail.content.map((detailItem, index) => (<span key={index}>{detailItem}</span>))*/}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};



export default EducationCard;
