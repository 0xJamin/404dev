import React from "react";
import { ContainerProps } from "./types";

export function Container({ children }: ContainerProps) {
  return <div>{children}</div>;
}
