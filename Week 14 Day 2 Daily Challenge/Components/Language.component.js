import React from 'react';
import './Language.component.css'; // Import the CSS file

const Language = ({ language, handleVote }) => {
  return (
    <div className="language-container">
      <p className="language-name">{language.name}</p>
      <p className="language-votes">{language.votes} votes</p>
      <button className="vote-button" onClick={() => handleVote(language.id)}>Vote</button>
    </div>
  );
};

export default Language;