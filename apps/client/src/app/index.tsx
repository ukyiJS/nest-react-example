import { Index } from '@/pages';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/shared/assets/styles/index.css';

const rootElement = document.getElementById('root');

if (rootElement) createRoot(rootElement).render(
  <StrictMode>
    <Index />
  </StrictMode>,
);
