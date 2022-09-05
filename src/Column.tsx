import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";

interface ColumnProps {
  text: string;
  id: string;
}

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId } = useAppState();
  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {/* {children} */}
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={console.log}
        dark
      />
      {/* <Card text="Generate app scaffold" id={"0"} />
      <Card text="Learn TypeScript" id={"1"} />
      <Card text="Begin to use static typing" id={"2"} /> */}
    </ColumnContainer>
  );
};
