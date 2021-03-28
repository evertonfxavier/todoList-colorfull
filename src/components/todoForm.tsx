import React, { useEffect, useRef, useState } from "react";
import { Box, Button, HStack, Input } from "@chakra-ui/react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

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
    <HStack as="form" marginBottom="32px" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <Input
            type="text"
            name="text"
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            // ref={inputRef}

            p="14px 32px 14px 16px"
            borderRadius="4px 0 0 4px"
            border="2px"
            borderColor="#5d0cff"
            outline="none"
            width="320px"
            background="transparent"
            color="white"
            _placeholder={{ color: "#e2e2e2" }}
          />
          <Button
            type="submit"
            p="16px"
            border="none"
            borderRadius="0 4px 0 4px 0"
            cursor="pointer"
            outline="none"
            bg="linear-gradient(98deg, rgba(93,12,255, 1)0%, rgba(155,0,250,1) 100%)"
            style={{ marginInlineStart: "0" }}
            color="white"
            textTransform="capitalize"
          >
            Edit Todo
          </Button>
        </>
      ) : (
        <>
          <Input
            type="text"
            name="text"
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            // ref={inputRef}

            p="14px 32px 14px 16px"
            borderRadius="4px 0 0 4px"
            border="2px"
            borderColor="#5d0cff"
            outline="none"
            width="320px"
            background="transparent"
            color="white"
            _placeholder={{ color: "#e2e2e2" }}
          />
          <Button
            type="submit"
            p="16px"
            border="none"
            borderRadius="0 4px 0 4px 0"
            cursor="pointer"
            outline="none"
            bg="linear-gradient(98deg, rgba(93,12,255, 1)0%, rgba(155,0,250,1) 100%)"
            style={{ marginInlineStart: "0" }}
            color="white"
            textTransform="capitalize"
          >
            Add todo
          </Button>
        </>
      )}
    </HStack>
  );
};

export default TodoForm;
