import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import emailjs from '@emailjs/browser';
import App from './App.tsx';
import './index.css';

const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
if (emailjsPublicKey) {
  emailjs.init({ publicKey: emailjsPublicKey });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
