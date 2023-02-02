import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    if (newTodoValue === null || newTodoValue === '') {
      event.preventDefault();
      alert("Ingrese un valor para el nuevo TODO");
    } else {
      event.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
      alert("TODO añadido correctamente");
    }
  };
  
  return(
    <form onSubmit={onSubmit}>
      <label>Nuevo TODO</label>
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder="Ingrese el nuevo TODO"
      />
      <div className="TodoForm-buttonContainer">
        <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };