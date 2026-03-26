import React, { useState } from 'react'
import './App.css'
import Sidebar from './screens/Sidebar.jsx'

function App() {
  const [panelOpen, setPanelOpen] = useState(true)

  return (
    <div className="App">
      <div className={`panel ${panelOpen ? 'open' : 'closed'}`}>
        <button
          className="panel-toggle"
          onClick={() => setPanelOpen(!panelOpen)}
          aria-label={panelOpen ? 'Close panel' : 'Open panel'}
        >
          {panelOpen ? (
            /* Chevron left — close */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          ) : (
            /* Hamburger — open */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <div className="panel-content">
          <Sidebar />
        </div>
      </div>

      <div className="content">
        <h1>OneAI</h1>
        <p>OneAI is a powerful AI platform that provides a wide range of AI services and tools to help businesses and developers build intelligent applications.</p>
      </div>
    </div>
  )
}

export default App