import { ReactNode } from "react";
import { LoginProps } from "../pages/login/interfaces";

export interface ReactProps {
  children: ReactNode;
}

export interface ContextProps {
  value: LoginProps | null;
  setValue: (value: string) => void;
  user: LoginProps;
  logout: () => void;
}