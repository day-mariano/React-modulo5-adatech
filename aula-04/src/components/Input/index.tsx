import { FC, ReactNode } from "react";

interface inputProps {
  children?: ReactNode
  type?: HTMLInputElement['type']
}

const Input: FC<inputProps> = ({ children, ...props }) => {
  console.log(props)
  return <input type={props.type}>{children}</input>;
};

export { Input };
