import { createRoot } from 'react-dom/client';
import App from "./src/components/Main/Main";

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// All resize
window.addEventListener('resize', () => {
  const vh2 = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh2}px`);
});


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);