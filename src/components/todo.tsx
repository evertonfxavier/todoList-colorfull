import React, { useState } from "react";
import { Box, Icon } from "@chakra-ui/react";
import TodoForm from "./todoForm";
import { EditIcon, SmallCloseIcon } from "@chakra-ui/icons";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, idx) => (
    <Box
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={idx}
    >
      <Box key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </Box>
      <Box className="icons">
        <Icon as={SmallCloseIcon} onClick={() => removeTodo(todo.id)} />
        <Icon
          as={EditIcon}
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </Box>
    </Box>
  ));
};

export default Todo;
