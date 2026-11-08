import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { connectStreamlit } from './services/streamlit.js';
import './styles.css';

const roots = new WeakMap();

export default function renderTerminal({ parentElement, data, setTriggerValue }) {
  connectStreamlit(setTriggerValue, data?.reply);

  let root = roots.get(parentElement);
  if (!root) {
    root = createRoot(parentElement.querySelector('#kronbit-root'));
    roots.set(parentElement, root);
    root.render(<App />);
  }

  return () => {
    root.unmount();
    roots.delete(parentElement);
  };
}
