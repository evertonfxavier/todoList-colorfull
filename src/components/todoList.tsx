import React, { useState } from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import TodoForm from "./todoForm";
import Todo from "./todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //para nao gerar um to-do em branco
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(todo, ...todos);
  };

  
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    
    setTodos((prev) =>
    prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <VStack
      justifyContent="start"
      w="520px"
      // minH="600px"
      bgColor="#161a2b"
      textAlign="center"
      margin="128px auto"
      borderRadius="10px"
      paddingBottom="32px"
      p="1.6rem"
    >
      <Heading color="white" m="32px 0" fontSize="24px">
        What's the plan for today?
      </Heading>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    </VStack>
  );
};

export default TodoList;
