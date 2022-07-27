import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import News from './components/News';
import Tourism from './components/Tourism';
import Islamic from './components/Islamic/Islamic';
import Historic from './components/Historic/Historic';
import Christian from './components/Christian/Christian';
import Collapsed from './components/Collapsed/Collapsed';
import IslamicContribute from './components/Islamic/IslamicContribute';
import HistoricContribute from './components/Historic/HistoricContribute';
import CollapsedContribute from './components/Collapsed/CollapsedContribute';
import ChristianContribute from './components/Christian/ChristianContribute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="vesti" element={<News />} />
      <Route path="turizam" element={<Tourism />} />
      <Route path="turizam/islamic" element={<Islamic />} />
      <Route path="turizam/historic" element={<Historic />} />
      <Route path="turizam/christian" element={<Christian />} />
      <Route path="turizam/collapsed" element={<Collapsed />} />
      <Route path="turizam/islamic/contribute" element={<IslamicContribute />} />
      <Route path="turizam/historic/contribute" element={<HistoricContribute />} />
      <Route path="turizam/collapsed/contribute" element={<CollapsedContribute />} />
      <Route path="turizam/christian/contribute" element={<ChristianContribute />} />





    </Routes>
  </BrowserRouter>
);
