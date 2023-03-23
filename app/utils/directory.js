export function getFilesAndFolders(currentLocation, filesystem) {
    const currentDirectory = currentLocation.split("/");
    let currentObject = filesystem;

    for (let i = 0; i < currentDirectory.length; i++) {
      const child = currentObject.children.find(
        (child) => child.name === currentDirectory[i]
      );

      if (!child) {
        return null;
      }

      currentObject = child;
    }

    return currentObject.children.map((child) => child.name);
  }


