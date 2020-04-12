/** Destructuración para utilizar la propiedad ARGV del archivo yargs.js */
const { ARGV } = require('./config/yargs');
const COLORS = require('colors');
/** Destructuración para utilizar el createFiles del archivo multiplicar */
let { createFile, multiplicationList } = require('./multiplicar/multiplicar');


const COMAND = ARGV._[0];

switch (COMAND) {
    case 'listar':
        multiplicationList(ARGV.base, ARGV.limite);
        break;
    case 'crear':
        console.log('Crear');
        createFile(ARGV.base, ARGV.limite)
            .then(file => console.log(`Archivo creado: ${file}`))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido');
}