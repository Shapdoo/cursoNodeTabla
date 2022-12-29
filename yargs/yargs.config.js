const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar.",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra el contenido del archivo de texto.",
  })
  .option("li", {
    alias: "limite",
    type: "number",
    default: 10,
    describe: "Limita las multiplicaciones.",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) throw new Error("La base debe ser un número.");
    if (isNaN(argv.li)) throw new Error("Este parámetro recibe un número.");
    return true;
  }).argv;

module.exports = argv;
