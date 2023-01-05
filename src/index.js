import React from 'react';
//import { render} from 'react-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import HeadingClass from './HeadingClass'
import HeadingFunction from './HeadingFunction'
import Counter from './Counter';
import List from './List/index'
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
  < HeadingFunction/>
  <HeadingClass />
  <Counter/>
  <List/>
  </React.StrictMode>
);


