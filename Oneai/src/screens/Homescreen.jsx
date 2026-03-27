import React, { useState } from 'react';
import { SendHorizontal, Lightbulb, Code, PenTool, Compass } from 'lucide-react';
import './Homescreen.css';

function Homescreen() {
  const [query, setQuery] = useState('');

  const suggestions = [
    { icon: <Compass size={18} />, text: "Plan a 3-day trip to Tokyo" },
    { icon: <Lightbulb size={18} />, text: "Explain quantum physics simply" },
    { icon: <Code size={18} />, text: "Help me debug a React useEffect" },
    { icon: <PenTool size={18} />, text: "Write a professional email for a job" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("User Query:", query);
      setQuery('');
    }
  };

  return (
    <div className="home-screen">
      <div className="home-header">
        <p className="tagline">How can I help you today?</p>
      </div>

      <div className="main-content">
        <div className="suggestions-grid">
          {suggestions.map((item, index) => (
            <div 
              key={index} 
              className="suggestion-card" 
              onClick={() => setQuery(item.text)}
            >
              <div className="suggestion-icon">{item.icon}</div>
              <p className="suggestion-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-bar"
          placeholder="Message OneAI..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="send-btn" disabled={!query.trim()}>
          <SendHorizontal size={20} />
        </button>
      </form>
    </div>
  );
}

export default Homescreen;