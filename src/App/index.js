//import logo from './logo.svg';
import React from 'react';
import { AppUI } from './AppUI';
//import './App.css';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   {text: 'No sé si come para vivir', completed: false},
//   {text: 'O vive para comer', completed: false},
//   {text: 'Sopita Ramen', completed: false},
//   {text: 'Melchan', completed: true},
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
