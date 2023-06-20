import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Calculator App Project
// =====================================================================================
//import CalculatorApp from './01 calculatorComponents/Component/CalculatorApp';

// Indecision App Project
// =====================================================================================
//import IndecisionApp from './02 indecisionAppComponent/IndecisionApp';

// http Components Project
// =====================================================================================
//import HttpApp from './03 httpComponents/HttpApp';

// hook Components Project
// =====================================================================================
import HookApp from './04 hooksTutorial/HookApp';


ReactDOM.render(
  <React.StrictMode>
    <HookApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
