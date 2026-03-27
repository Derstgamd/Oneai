import React, { useState } from 'react'
import './App.css'
import Sidebar from './screens/Sidebar.jsx'
import Homescreen from './screens/Homescreen.jsx'
// Import clean icons from lucide-react
import { ChevronLeft, Menu, User, Settings } from 'lucide-react'

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
          {/* Conditionally render icons based on state */}
          {panelOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
        </button>

        <div className="panel-content">
          <Sidebar />
        </div>

        {/* Footer: Only renders if the panel is CLOSED */}
        {!panelOpen && (
          <div className="panel-footer">
            <button className="footer-btn" title="User Profile" aria-label="User Profile">
              <User size={20} />
              <span className="footer-label">Profile</span>
            </button>
            <button className="footer-btn" title="Settings" aria-label="Settings">
              <Settings size={20} />
              <span className="footer-label">Settings</span>
            </button>
          </div>
        )}
      </div>

      <div className="content">
        <h1>OneAI</h1>
        <Homescreen />
      </div>
    </div>
  )
}

export default App