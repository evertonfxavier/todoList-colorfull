import Head from "next/head";
import { VStack } from "@chakra-ui/react";
import TodoList from "../components/todoList";

export default function Home() {
  return (
    <VStack
      w="full"
      h="100vh"
      bg="linear-gradient(98deg, rgba(48,16,255, 1)0%, rgba(100,115,255,1) 100%)"
      justifyContent="center"
    >
      <Head>
        <title>To-do Colorful</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TodoList />
    </VStack>
  );
}
