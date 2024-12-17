import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './sections/Header';
import Break from './sections/Break';
import Workspace from './sections/Workspace';
import Projects from './sections/Projects';
import Footer from './sections/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
function App() {
  return (
    <React.StrictMode>
      <Header />
      <Break />
      <Workspace />
      <Break />
      <Projects />
      <Break />
      <Footer />
    </React.StrictMode>
  );
}
