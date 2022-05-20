
/*
  Al exportar una función/objeto así:

  > module.exports.verbose

  Estaremos exportando el contenido con el nombre `verbose`

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger.verbose("Heeey!")
*/

module.exports.verbose = (message) => {
    console.log(`Propiedad verbose: ${message}`)
  }

// Propiedad ejemplo, con mas de un argumento
module.exports.example = (message, numero) => {
    console.log(`Ejemplo de propiedad: ${message}`)
    console.log(`Procesamiento de valor numerico: ${numero + 2}`)
    //Solo imprime el valor
    console.log(number%2)
  }