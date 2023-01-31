import { Button } from "./style";
import { memo } from "react";
interface IProps {
  onClick: () => void;
  label: string;
}

export const ButtonMore = memo(({ onClick, label }: IProps) => {
  return <Button onClick={onClick}>{label}</Button>;
});
