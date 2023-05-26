import React, { useState } from 'react';
import "./App.css"
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleAccordionClick}>
        <h3>{title}</h3>
        <span>{isOpen ? '▼' : '▲'}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
