import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import {Robots} from './Robots';
import CardList from './CardList/CardList';

ReactDOM.render(
  <CardList Robots={Robots}/>
,
document.getElementById('root')
);

