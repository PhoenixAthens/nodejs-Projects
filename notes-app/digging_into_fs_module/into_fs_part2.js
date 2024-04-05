import { access, open, close, read } from "node:fs";
let pathToFile = "/Users/anmolkhanna/Downloads/guessGame";
function readingData_wrongWay(path) {
  access(path, (err) => {
    if (err) {
      if (err.code == "ENOENT") {
        console.error("myFile does not exist!");
        return;
      }
      throw err;
    }
    open(path, "r", (err, fd) => {
      if (err) {
        console.log("Err while opening the file!");
        throw err;
      }
      try {
        readMyData(fd);
      } finally {
        close(fd, (err) => {
          console.log("Err occured while closed the file!");
          throw err;
        });
      }
    });
  });
}

function readMyData(fd) {
  read(fd, (err, num, buffer) => {
    if (err) {
      console.log("err while reading the file!");
      throw err;
    }
    for (let i in buffer) {
      console.log(buffer.at(i));
    }
  });
}

readingData_wrongWay(pathToFile);
