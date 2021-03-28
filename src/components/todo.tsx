import React, { useState } from "react";
import { Box, HStack, Icon } from "@chakra-ui/react";
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
    <>
      {todo.isComplete ? (
        <HStack
          key={idx}
          justifyContent="space-between"
          alignItems="center"
          margin="4px auto"
          color="white"
          bg="linear-gradient(90deg, rgba(255,118,20, 1)0%, rgba(255,84,17,1) 100%)"
          p="16px"
          borderRadius="5px"
          w="90%"
          css={{
            "&:nth-child(4n + 1)": {
              background:
                "linear-gradient(90deg,rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%)",
            },
            "&:nth-child(4n + 2)": {
              background:
                "linear-gradient(90deg,rgba(255, 12, 241, 1) 0%, rgba(250, 0, 135, 1) 100%)",
            },
            "&:nth-child(4n + 3)": {
              background:
                "linear-gradient(90deg,rgba(20, 159, 255, 1) 0%, rgba(17, 122, 255, 1) 100%)",
            },
          }}
          textDecoration="line-through"
          opacity="0.4"
          m="initial"
        >
          <Box
            key={todo.id}
            onClick={() => completeTodo(todo.id)}
            color="white"
          >
            {todo.text}
          </Box>

          <HStack alignItems="center" fontSize="24px" cursor="pointer">
            <Icon
              as={EditIcon}
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              color="white"
              marginRight="5px"
            />
            <Icon
              as={SmallCloseIcon}
              onClick={() => removeTodo(todo.id)}
              color="white"
            />
          </HStack>
        </HStack>
      ) : (
        <HStack
          key={idx}
          // className={todo.isComplete ? "todo-row complete" : "todo-row"}
          justifyContent="space-between"
          alignItems="center"
          margin="4px auto"
          color="white"
          bg="linear-gradient(90deg, rgba(255,118,20, 1)0%, rgba(255,84,17,1) 100%)"
          p="16px"
          borderRadius="5px"
          w="90%"
          css={{
            "&:nth-child(4n + 1)": {
              background:
                "linear-gradient(90deg,rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%)",
            },
            "&:nth-child(4n + 2)": {
              background:
                "linear-gradient(90deg,rgba(255, 12, 241, 1) 0%, rgba(250, 0, 135, 1) 100%)",
            },
            "&:nth-child(4n + 3)": {
              background:
                "linear-gradient(90deg,rgba(20, 159, 255, 1) 0%, rgba(17, 122, 255, 1) 100%)",
            },
          }}
          m="initial"
        >
          <Box
            key={todo.id}
            onClick={() => completeTodo(todo.id)}
            color="white"
          >
            {todo.text}
          </Box>

          <HStack alignItems="center" fontSize="24px" cursor="pointer">
            <Icon
              as={EditIcon}
              color="white"
              marginRight="5px"
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
            />
            <Icon
              as={SmallCloseIcon}
              color="white"
              onClick={() => removeTodo(todo.id)}
            />
          </HStack>
        </HStack>
      )}
    </>
  ));
};

export default Todo;
