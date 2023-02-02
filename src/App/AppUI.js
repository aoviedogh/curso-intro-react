import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoEmpty } from "../TodoEmpty";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";

function AppUI() {
  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal, 
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter 
        // todosCompletados = {completedTodos}
        // total = {totalTodos}
      />

      <TodoSearch 
        // searchValue = {searchValue}
        // setSearchValue = {setSearchValue}
      />

      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError error={error}/>}
        {(!loading && !searchedTodos.length) && <TodoEmpty />}

        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}/>
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal = {setOpenModal}
      />
      {/* <button>+</button> */}
    </React.Fragment>
  );
}

export { AppUI };