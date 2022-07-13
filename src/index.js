import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//ReactDOM.render(<Provider store={store}><SellBook /></Provider>, document.getElementById('root'));


