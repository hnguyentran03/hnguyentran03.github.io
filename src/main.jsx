import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import '@fontsource/outfit'
import '@fontsource/roboto'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const blobAnimation = () => {
  const blob = document.getElementById('blob');
  
  document.body.onpointermove = event => {
    const {clientX, clientY} = event;
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    const adjustedX = clientX + scrollX;
    const adjustedY = clientY + scrollY;
    console.log(clientX, clientY);
    // blob.style.left = `${clientX}px`;
    // blob.style.top = `${clientY}px`;
    blob.animate({
      left: `${adjustedX}px`,
      top: `${adjustedY}px`,
    }, {duration: 3000, fill:'forwards'});
  };
};

const init = () => {
  blobAnimation();
  // randomizeEffect();
}
window.onload = init;