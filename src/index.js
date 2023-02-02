import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/index.js';
//import reportWebVitals from './reportWebVitals';

//Normalmente ya no se usa
//class Componente extends React.Component{}

/*****************************************
//EJEMPLO
const e = React.createElement

function AppPrueba() {
  return(
    //esta línea
    <h1 id='title'>
      Hola React
    </h1>,

    //es igual a esta
    e('h1', { id: 'title'}, 'Hola React')
  );
}
*****************************************/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.createPortal(
  <App />,
  document.getElementById('modal')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();