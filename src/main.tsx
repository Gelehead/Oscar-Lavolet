import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import all CSS files in the correct order
import './css/base.css'
import './css/button.css'
import './css/navigation.css'        // New navigation styles
import './css/header.css'           // New header styles
import './css/footer.css'           // New footer styles
import './css/hero.css'
import './css/section.css'
import './css/skills.css'
import './css/project-card.css'     // New project card styles
import './css/project.css'         // New projects page styles
import './css/calendar.css'
import './css/main_page.css'        // Updated main page utilities

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)