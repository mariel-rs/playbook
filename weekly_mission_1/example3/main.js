/*
  node main.js
*/

const logger1 = require('./logger_1')
const logger2 = require('./logger_2')

logger1('Mensaje desde logger1')
logger2.verbose('Mensaje usando propiedad verbose de logger2')

// Propiedad ejemplo
logger2.example('Mensaje ejemplo', 2)
