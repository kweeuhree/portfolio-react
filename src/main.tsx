import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.js'

import './index.css'



const rootElement = document.getElementById('root');
try {
  if(rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>,
    )
  }
} catch (error) {
  throw new Error(`Could not find root element. Error: ${error}`);
}

