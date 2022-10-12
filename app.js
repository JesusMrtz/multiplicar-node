/** Importar el createFile del archivo multiply.js */
const { createFile } = require("./helpers/multiply");

const argv = require('./config/yargs');


/** Obtener los argumentos enviado por la consola con el process.argv de manera nativa
 * Es una desventaja utilizar el process.arg porque los argumentos los envia en formato array y es importante el orden al momento de enviarlos
*/
// const [, , base = "--base=9"] = process.argv;
// const [, value] = base.split('=');
// console.log(value);


/** Obtener los argumentos enviados por la consola desde un paquete externo (yargs)  
 * Es una ventaja utilizar el paquete yargs porque los argumentos enviados los convierte en un objeto y no importa el orden al momento de enviarlos
*/


createFile(argv.base, argv.size, argv.list);

// console.log(argv);
// console.log('Base: ', argv.base);