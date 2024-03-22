import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import ScrollToTop from './components/ScrollTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BrowserRouter><App /></BrowserRouter>);
root.render(<BrowserRouter><ScrollToTop /><App /></BrowserRouter>);
