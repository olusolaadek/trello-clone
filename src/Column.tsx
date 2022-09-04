import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";

interface ColumnProps {
  text: string;
}

export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {/* {children} */}

      <Card text="Generate app scaffold" />
      <Card text="Learn TypeScript" />
      <Card text="Begin to use static typing" />
    </ColumnContainer>
  );
};
