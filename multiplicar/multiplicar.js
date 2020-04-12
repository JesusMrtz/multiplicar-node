/** Requireds */
const fs = require('fs');
const COLORS = require('colors');

let createFile = (baseExponential, limit) => {
    return new Promise((resolve, reject) => {
        if (!Number(baseExponential)) {
            reject(`El valor ${baseExponential} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${baseExponential} X ${i}: ${baseExponential * i}\n`;
        }

        fs.writeFile(`tables/taba-${baseExponential}.txt`, data, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve(`Tabla-${baseExponential}.txt`.green);
            }
        });

    });
};

let multiplicationList = (base, limit) => {
    for (let index = 1; index <= limit; index++) {
        console.log(`${base} X ${index} = ${base * index}`);
    }
};

module.exports = {
    createFile,
    multiplicationList
};