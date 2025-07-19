import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n' // Import i18n configuration
import './index.css'
import App from './App.tsx'

// Initialize RTL if needed before rendering
const savedLanguage = localStorage.getItem('preferredLanguage');
if (savedLanguage === 'ar') {
  document.documentElement.dir = 'rtl';
  document.documentElement.classList.add('rtl');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
