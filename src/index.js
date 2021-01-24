import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NameApp from './components/NameApp';

ReactDOM.render(
  <React.StrictMode>
    <div className = "wrapper">
      <NameApp />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
