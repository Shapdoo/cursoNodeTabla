const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base, listar, limite) => {
  try {
    let salida = "";

    for (let i = 1; i <= limite; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("======================".america);
      console.log("    Tabla del:".blue, base);
      console.log("======================".america);
      console.log("Contenido:".bgYellow.black);
      console.log('')
      console.log(salida.underline.bgBlack);
    }

    fs.writeFileSync(`./files/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
