import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from './effects/ScrollToTop/ScrollToTop';

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App authorized={true}/>
    </Router>,
  </React.StrictMode>
);

reportWebVitals();

