import React, { useState, useRef, useEffect } from 'react';
import './CertificationCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendar, faIdCard, faTools } from '@fortawesome/free-solid-svg-icons';

const CertificationCard = ({ certification, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    import(`../../assets/images/${certification.iconFilename}`)
      .then((image) => {
        setImageSrc(image.default);
      })
      .catch((error) => {
        console.error(`Error loading image: ${error}`);
      });
  }, [certification.iconFilename]);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (detailsRef.current) {
      if (isOpen) {
        detailsRef.current.classList.remove('slide-up');
        detailsRef.current.classList.add('slide-down');
      } else {
        detailsRef.current.classList.remove('slide-down');
        detailsRef.current.classList.add('slide-up');
      }
    }
  }, [isOpen]);

  return (
    <div className={`certification-card ${className}`} onClick={toggleDetails}>
      <h3 className={`toggle-btn ${isOpen ? 'open' : ''}`} >
        <img src={imageSrc} alt="Certification Icon" className="certification-icon" />
        {certification.title} 
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </h3>
      <div
        ref={detailsRef}
        className={`certification-card-details ${isOpen ? 'slide-down' : 'slide-up'}`}
      >
        <p>{certification.description}</p>
        <p className="card-text">
        <FontAwesomeIcon icon={faBuilding} className="icon-text" />
        <span className="highlighted-text">Issuing Authority:</span>{certification.issuingAuthority}
      </p>
      <p className="card-text">
        <FontAwesomeIcon icon={faCalendar} className="icon-text" />
        <span className="highlighted-text">Issued:</span>{certification.issuedDate}
      </p>
      {certification.expiresDate && 
        <p className="card-text">
          <FontAwesomeIcon icon={faCalendar} className="icon-text" />
          <span className="highlighted-text">Expires:</span>{certification.expiresDate}
        </p>}
      <p className="card-text">
        <FontAwesomeIcon icon={faIdCard} className="icon-text" />
        <span className="highlighted-text">Credential ID:</span>{certification.credentialID}
      </p>
      <p className="card-text">
        <FontAwesomeIcon icon={faTools} className="icon-text" />
        <span className="highlighted-text">Skills:</span>{certification.skills.join(', ')}
      </p>
      
      </div>
      <a href={certification.credentialLink} className="show-credential-btn" target="_blank" rel="noopener noreferrer">
        Show Credential
      </a>
    </div>
  );
};

export default CertificationCard;
