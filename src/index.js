
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter , Router , Route , Routes } from 'react-router-dom';
import Footer from './component/footer';
import Home from './component/Home';
import CharacterResult from './component/characterResult';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/results" element={<CharacterResult />}/>
      </Routes>
    </BrowserRouter>
    
    <Footer />
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js') // public/service-worker.js
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
