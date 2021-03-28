import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="text"
        placeholder="Add a todo"
        value={input}
        onChange={handleChange}
        ref={inputRef}
      />
      <Button type="submit">Add todo</Button>
    </Box>
  );
};

export default TodoForm;
