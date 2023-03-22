import { ReactTerminal } from "react-terminal";

function Terminal(props) {
  // Define commands here
  const commands = {
    whoami: "kidannelson",
    help: (command) => helpHandler(command),
    cd: (directory) => `changed path to ${directory}`,
    ls: handleListDirectory(),
    github: (
      <a href="https://github.com/N4D1K-lgtm">N4D1K-lgtm on Github.com</a>
    ),
  };

  function handleListDirectory() {
    return "hello from callback";
  }

  function helpHandler(command) {}

  return (
    <ReactTerminal
      commands={commands}
      theme="material-dark"
      showControlBar={false}
      showControlButtons={false}
      welcomeMessage={"Welcome! Type 'help' to get started. \n"}
      prompt={">"}
      errorMessage={"Command not found!"}
    />
  );
}
export default Terminal;
