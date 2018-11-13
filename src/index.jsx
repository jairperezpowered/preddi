import './style.scss'
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Preddi minimal tool';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
)

module.hot.accept();