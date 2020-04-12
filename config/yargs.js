// REQUIREDS
const OPTIONS = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const ARGV = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', OPTIONS)
    .command('crear', 'Crea un archivo .txt de la tabla de multiplicar', OPTIONS)
    .help()
    .argv;

module.exports = {
    ARGV
}