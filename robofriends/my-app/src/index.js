import React from 'react';
//import ReactDOM from 'react-dom';(uncomment for v17)
import './index.css';
import App from './App'
import 'tachyons';
import './App.css'
import { createRoot } from 'react-dom/client';

  

//import registerServiceWorker from './registerServiceWorker'
//import reportWebVitals from './reportWebVitals';

//v17
//ReactDOM.render(<App />, document.getElementById('root'))


//v18
createRoot(document.getElementById('root')).render(<App />);