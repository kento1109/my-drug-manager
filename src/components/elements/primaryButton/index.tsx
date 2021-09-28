import React, { ReactNode } from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 60px;
  width: 200px;
  border: 1px solid #BEBEBE;
  box-sizing: border-box;
  border-radius: 6px;
  padding-left: 16px;
  font-size: 24px;
  font-weight: bolder;
  color: white;
  margin: 1em;
  background-color: #41aaff;
`;

type Props = {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const PrimaryButton = (props: Props) => {
  const { children, onClick } = props;
  return <Button onClick={onClick}>{children}</Button>;
};

export default PrimaryButton;