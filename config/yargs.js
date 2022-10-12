/** Importa yargs */
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');


const argv = yargs(hideBin(process.argv)).option(
    'b', {
        alias: 'base',
        description: 'Envia la base de la tabla de multiplicar',
        type: 'number',
        // El argumento es requerido
        demandOption: true,
    }
).option('s', {
    alias: 'size',
    describe: 'Enviar el límite de la tabla de multiplicar',
    type: 'number',
    default: 10
}).option('l', {
    alias: 'list',
    describe: 'Listar la tabla de multiplicar en la consola',
    type: 'boolean'
}).check((argv, options) => {
    if ( isNaN(argv.b) ) {
        throw 'La Base tiene que ser un número'
    }

    if ( isNaN(argv.s) ) {
        throw 'El límite tiene que se un número';
    }

    return true;
}).argv;


module.exports = argv;