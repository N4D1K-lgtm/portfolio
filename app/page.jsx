"use client";

import { TerminalContextProvider } from "react-terminal";
import Terminal from "./components/terminal";

export default function Page() {
  return (
    <body>
      <TerminalContextProvider>
        <Terminal class="terminal" />
      </TerminalContextProvider>
    </body>
  );
}
