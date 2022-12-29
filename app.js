const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./yargs/yargs.config.js");
const colors = require("colors");

console.clear();

crearArchivo(argv.b, argv.l, argv.li)
  .then((fileName) =>
    console.log(
      "file successfully created".green,
      fileName.bgGreen.black.underline.italic, "👍"
    )
  )
  .catch((error) => console.error(error));

// const [, , arg3 = 5] = process.argv;
// const [, base = 5 ] = arg3.split('=')

// console.log({ argv1: process.argv, argv })
// console.log({ base: argv.base })
