import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode id="tst" sx={{ width: '100%', margin: 0, padding: '0 0 0 0' }}>
      <Main />
    </React.StrictMode>
  </Router>,
)
