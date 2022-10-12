/** Importar de fileSystem */
const fs = require('fs');
const colors = require('colors');

async function createFile(base, limit = 10, list = false) {
    try {
        let result = ''
        for( let i = 1; i <= limit; i++ ) {
            if (i === limit) {
                result += `${base} X ${i} = ${base * i}`;
            } else {
                result += `${base} X ${i} = ${base * i}\n`;
            }
        }

        if ( list ) {
            console.log(`Tabla del ${base}`.white);
            console.log(result.blue);
            console.log('');
        }
        
        await fs.writeFileSync(`./results/tabla-${base}.txt`, result);
        console.log('Tabla creada con éxito!!'.green);    
    } catch (error) {
        console.log('Hubo un error al crear el archivo'.red);
    }
}


module.exports = {
    createFile
}