import React from "react";

import Header from "../Header";
import { LayoutProps } from "./types";

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
