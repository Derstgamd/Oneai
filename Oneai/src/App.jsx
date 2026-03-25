import React, { useState } from 'react'
import './App.css'

function App() {
  const [panelOpen, setPanelOpen] = useState(true)

  return (
    <>
      <div className="App">
        <div className={`content ${panelOpen ? 'with-panel' : ''}`}>
          <h1>OneAI</h1>
          <p>OneAI is a powerful AI platform that provides a wide range of AI services and tools to help businesses and developers build intelligent applications.</p>
        </div>
        <button className="panel-button" onClick={() => setPanelOpen(!panelOpen)}>
          {panelOpen ? 'Close Panel' : 'Open Panel'}
        </button>
        {panelOpen && (
          <div className="panel">
            <h2>Panel Content</h2>
            <p>This is the content of the panel. You can put any information or tools here.</p>
          </div>)}
          
      </div>
    </>
  )
}

export default App
