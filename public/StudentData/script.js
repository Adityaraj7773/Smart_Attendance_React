const fs = require("fs");

fs.readdir("./", (err, files) => {
  let arr;
  files.forEach((file) => {
    console.log(file);
  });
  console.log(files);
});
