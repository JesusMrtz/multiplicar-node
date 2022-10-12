# Creación de un proyecto en consola con nodeJs
>Creado por Jesús Martínez Torres gracias al curso de [NodeJs](https://www.udemy.com/course/node-de-cero-a-experto/)


  - [Primeros pasos](#primeros-pasos)
  - [Argumentos soportados](#argumentos-soportados)
  - [Modo de Uso](#modo-de-uso)

## Primeros pasos
Ejecutar el comando `npm install` para instalar todas las dependencias necesarias
## Argumentos soportados

| Comando | Alias | Descripción | Tipo | Requerido | Default |
| ----------- | ----------- | ----------- | ----------- |----------- | - |
| --help | | Muestra la ayuda | boolean | No |
| --version |  | Muestra número de versión | boolean | No |
| --base | -b | Envia la base de la tabla de multiplicar | number | Si |
| --size | -s | Envia el límite de la tabla de multiplicar | number | No | 10 |
| --list | -l | Lista la tabla de multiplicar en consola | boolean | No | false |

## Modo de Uso
Ejecuta el comando `node app.js` con su respectivos argumentos para crear un archivo .txt con la tabla de multiplicar en el directorio de result