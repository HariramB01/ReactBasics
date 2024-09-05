import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Example2 from './Example2';
// import Example1 from './Example1';
import App from './App';
// import Example4 from './Example4';
// import Example5 from './Example5';
// import Example6 from './Example6';
import Assignment1 from './Assignment1';
import Example7 from './Example7';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <Example1/>
    <Example2 />
    <Example4 />
    <Example5 />
    <Example6 /> */}
    <Assignment1 />
    <br />
    <Example7 />
  </React.StrictMode>
);
