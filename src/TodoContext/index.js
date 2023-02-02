import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  // const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // setTodos(newTodos); //se comenta para usar ahora persistencia
    saveTodos(newTodos);

    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true
    // };
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    if(window.confirm("¿Seguro de eliminar el Todo?")) {
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      // setTodos(newTodos); //se comenta para usar ahora persistencia
      saveTodos(newTodos);
    }
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  //Prueba de useEffect
  // console.log("Render antes del useEffect");

  // React.useEffect(() => {
  //   console.log("Código del useEffect");
  // }, [totalTodos]);

  // console.log("Render después del useEffect");
  
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };