"use client";
import * as React from "react";
import { TerminalContextProvider } from "react-terminal";
import { ReactTerminal } from "react-terminal";

import { renderToString } from "react-dom/server";

import { Canvas } from "@react-three/fiber";
import TypingText from "./TypingText";
import Box from "./Box";

import { getFilesAndFolders } from "../utils/directory";

const Terminal = () => {
  const [theme, setTheme] = React.useState("default");
  const [user, setUser] = React.useState("kidannelson");
  const [prompt, setPrompt] = React.useState("&#36;");
  const [location, setLocation] = React.useState("~/aboutme");

  function helpHandler(command) {
    return;
  }

  const filesystem = {
    name: "~/",
    type: "folder",
    children: [
      {
        name: "aboutme",
        type: "folder",
        children: [
          {
            name: "file1.txt",
            type: "file",
          },
          {
            name: "file2.txt",
            type: "file",
          },
        ],
      },
      {
        name: "folder2",
        type: "folder",
        children: [
          {
            name: "file3.txt",
            type: "file",
          },
          {
            name: "file4.txt",
            type: "file",
          },
        ],
      },
    ],
  };

  const commands = {
    help: (
      <Canvas>
        <TypingText message="sample help message" />
      </Canvas>
    ),

    box: (
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
    ),

    ls: (location) => {
      getFilesAndFolders(location, filesystem).forEach((name) => {
        console.log(name);
      });
    },

    cd: (location) => {
      setLocation(location);
    },

    change_prompt: (prompt) => {
      setPrompt(prompt);
    },

    change_theme: (theme) => {
      const validThemes = [
        "light",
        "dark",
        "material-light",
        "material-dark",
        "material-ocean",
        "matrix",
        "dracula",
      ];
      if (!validThemes.includes(theme)) {
        return `Theme ${theme} not valid. Try one of ${validThemes.join(", ")}`;
      }
      setTheme(theme);
    },
  };

  const welcomeMessage = (
    <span>
      Welcome to my Portfolio! Type "help" for all available commands. <br />
    </span>
  );

  return (
    <div className="App">
      <TerminalContextProvider>
        <ReactTerminal
          prompt={
            <span>
              <span className="user">{user.toString() + "@react-os "}</span>
              <span className="location">{location.toString() + " "}</span>
              {prompt}
            </span>
          }
          themes={{
            default: {
              themeBGColor: "#191c1d",
              themeToolbarColor: "#191c1d",
              themeColor: "#e1e3e4",
              themePromptColor: "#c1c4eb",
            },
          }}
          theme={theme}
          showControlBar={false}
          showControlButtons={false}
          welcomeMessage={welcomeMessage}
          commands={commands}
          defaultHandler={(command, commandArguments) => {
            return `${command} passed on to default handler with arguments ${commandArguments}`;
          }}
        />
      </TerminalContextProvider>
    </div>
  );
};

export default Terminal;
