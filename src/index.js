import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import store from './redux/store';
//const store = createStore(cartReducer);
import store from './redux/store';




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  // ReactDOM.render(<Templisting />,document.getElementById('root'));


