import { memo, ReactNode } from "react";
import { createPortal } from "react-dom";

interface IProps {
  target: string;
  children: ReactNode;
}

export const Portal = memo(({ children, target }: IProps) => {
  const container = document.getElementById(target) as HTMLElement;

  return createPortal(children, container);
});
