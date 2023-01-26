import React from "react";
import { Button } from "./style";

interface IProps {
  onClick: () => void;
}

export const ButtonMore = ({ onClick }: IProps) => {
  return <Button onClick={onClick}>Show more</Button>;
};
