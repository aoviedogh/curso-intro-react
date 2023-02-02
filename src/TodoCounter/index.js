import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

//Una forma de trabajar con estilos en línea
// const estilos = {
//   color: 'blue',
//   backgroundColor: 'gray'
// }

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    // <h2 style={estilos}>Has completado 2 de 5 TODOs</h2>
    <h2 className="TodoCounter">Completado {completedTodos} de {totalTodos}</h2>
  );
}

export { TodoCounter };