import Head from "next/head";
import { VStack } from "@chakra-ui/react";
import TodoList from "../components/todoList";

export default function Home() {
  return (
    <VStack>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TodoList />
    </VStack>
  );
}
