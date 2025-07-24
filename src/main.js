// src/main.js
console.log('KWGGAME PWA loaded 🌟');// src/main.js

console.log('KWGGAME PWA loaded 🌟');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.error('SW registration failed:', err));
  });
}
