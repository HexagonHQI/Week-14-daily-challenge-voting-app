import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (languageIndex) => {
    const updatedLanguages = [...languages];
    updatedLanguages[languageIndex].votes++;
    setLanguages(updatedLanguages);
  };

  return (
    <div>
      <h1>Language Voting</h1>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            {language.name} ({language.votes} votes)
            <button onClick={() => handleVote(index)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;