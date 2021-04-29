import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type AccOptions = {id:number,fruit:string}[]
const accOptions = [{id:1,fruit:'apple'},{id:2,fruit:'plum'},{id:3,fruit:'pear'}]

ReactDOM.render(
  <React.StrictMode>
    <App accOptions={accOptions}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
